//import React, { useState } from 'react';
import { useState, useContext } from 'react';
import { LocaleContext } from '../utils/localeContext';
import { useFieldArray, useForm } from 'react-hook-form';
import { IReqHeader } from "./../utils/types";
import { url, query, queryDoc, variables } from "./../utils/const";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Playground.css';

function Playground() {
  const initReqHeaders = [];
  initReqHeaders.push({ key: 'Content-type', value: 'application/json' });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      reqHeaders: initReqHeaders,
      query,
      variables,
      endpoint: url,
    }
  });

  const { fields, append, remove } = useFieldArray({
    name: 'reqHeaders',
    control
  });

  const [dataViewer, setDataViewer] = useState('');
  const [dataDoc, setDataDoc] = useState('');
  const [isDocVisible, setIsDocVisible] = useState(true);
  const [isReqHeadersVisible, setIsReqHeadersVisible] = useState(false);
  const [isVariablesVisible, setIsVariablesVisible] = useState(false);
  const { useLocale } = useContext(LocaleContext);
  //  const [reqHeaders, setHeadersList] = useState(initReqHeaders);

  const reqHeadersEl = fields.map((item, index) => {
    return (
      <div className="req-header" key={item.id}>
        <input placeholder={useLocale.headerKey} {...register(`reqHeaders.${index}.key`)} />
        <input placeholder={useLocale.headerValue} {...register(`reqHeaders.${index}.value`)} />
        <button className="btn-del" onClick={() => remove(index)}>X</button>
      </div>
    )
  });

  function addReqHeader() {
    append({
      key: '',
      value: '',
    })
  };

  function showReqHeaders() {
    setIsReqHeadersVisible(!isReqHeadersVisible);
  };

  function showVariables() {
    setIsVariablesVisible(!isVariablesVisible);
  };

  function onClickPrettifyQuery() {
    const queryPrettified = prettify(getValues('query'));
    setValue('query', queryPrettified);
    const variablesPrettified = prettify(getValues('variables'));
    setValue('variables', variablesPrettified);
  }

  async function getDoc(data) {
    if (isDocVisible) {
      setIsDocVisible(false);
    } else {
      const reqHeadersObj: HeadersInit = {};
      data.reqHeaders.forEach((item: IReqHeader) => {
        reqHeadersObj[item.key] = item.value;
      });
      let variables = data.variables;
      if (variables.trim() === '') {
        variables = '{}';
      }
      const res = await makeRequest(data.endpoint, reqHeadersObj, queryDoc, variables);
      setDataDoc(prettify(JSON.stringify(res.data)));
      setIsDocVisible(true);
    }
  };

  const onSubmit = async (data) => {
    const reqHeadersObj: HeadersInit = {};
    //const reqHeadersObj = data.reqHeaders.reduce((acum, item: IReqHeader) => { acum[item.key] = item.value }, acc);
    data.reqHeaders.forEach((item: IReqHeader) => {
      reqHeadersObj[item.key] = item.value;
    });
    let variables = data.variables;
    if (variables.trim() === '') {
      variables = '{}';
    }
    //console.log('data.endpoint ', data.endpoint);
    //console.log('data.query ', data.query);
    const res = await makeRequest(data.endpoint, reqHeadersObj, data.query, variables);
    console.log('res.data ', res.data);
    setDataViewer(prettify(JSON.stringify(res.data)));
  };

  return (
    <main className="playground">
      <Header />
      <form className="editor-viewer" onSubmit={handleSubmit(onSubmit)}>
        <div className="buttons">
          <h2>{useLocale.playground}</h2>
          <button onClick={onClickPrettifyQuery}>{useLocale.prettify}</button>
          <button className={isDocVisible ? 'btn-pushed' : ''} onClick={getDoc}>{useLocale.doc}</button>
          <button type="submit">Run</button>
        </div>
        <div className={`doc ${isDocVisible ? '' : 'hidden'}`}>1111{dataDoc}</div>
        <div className="editor">
          <div className="input-endpoint">
            <label className="input-title" htmlFor="endpoint">{useLocale.endpoint}</label>
            <input id="endpoint" type="text" defaultValue={url} {...register('endpoint')} />
          </div>
          <div className="req-headers-wrapper">
            <div className="req-headers-title">
              <span className="input-title req-headers-text">{useLocale.headers}</span>
              <button className="btn-small" onClick={showReqHeaders}>{isReqHeadersVisible ? useLocale.hide : useLocale.show}</button>
              <button className={`btn-small ${isReqHeadersVisible ? '' : 'hidden'}`} onClick={addReqHeader}>{useLocale.add}</button>
            </div>
            <div className={`req-headers ${isReqHeadersVisible ? '' : 'hidden'}`} {...register('reqHeaders')}>
              {reqHeadersEl}
            </div>
          </div>
          <div className="variables-title">
            <span className="input-title variables-text">{useLocale.variables}</span>
            <button className="btn-small" onClick={showVariables}>{isVariablesVisible ? useLocale.hide : useLocale.show}</button>
          </div>
          <textarea className={`variables ${isVariablesVisible ? '' : 'hidden'}`} {...register('variables')}><pre>{variables}</pre></textarea>
          <textarea className="query" {...register('query')}><pre>{query}</pre></textarea>
        </div>
        <textarea className="viewer" value={dataViewer}><pre></pre></textarea>
      </form>
      <Footer />
    </main>
  );
}

function makeRequest(url: string, headers: HeadersInit, query: string, variables: string) {
  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables: JSON.parse(variables)
    }),
  }).then(res => res.json());
}

function prettify(str: string) {
  if (!str) return str;
  const ident = (level: number) => ' '.repeat(level * 2);
  const newLineChar = '{},[]';
  const spaceChar = ':';
  let arr = str.replaceAll('\n', ' ').split(' ');
  arr = arr.map(item => item.trim()).filter(item => item.trim() !== '').join(' ').split('');
  let level = 0;
  const arrNew: string[] = [];
  arr.forEach((item, index) => {
    let itemNew = item;
    if (newLineChar.includes(item)) {
      itemNew = `${item}\n${ident(level)}`;
    }
    if (spaceChar.includes(item)) {
      itemNew = `${itemNew} `; //\u00A0
    }
    if (item === '{' || item === '[') {
      level += 1;
      itemNew = `${item}\n${ident(level)}`;
    } else if (item === '}' || item === ']') {
      level -= 1;
      itemNew = `\n${ident(level)}${item}`;
      if (arr[index + 1] !== ',') {
        itemNew = `${itemNew}\n${ident(level)}`;
      }
    }
    arrNew.push(itemNew);
  });
  const strNew = arrNew.join('').split('\n').filter(item => item.trim() !== '').join('\n');
  return strNew;
}

export default Playground;
