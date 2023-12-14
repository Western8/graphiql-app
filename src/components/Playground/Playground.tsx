//import './Playground.css';
//import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './../utils/yup';
import Header from "../Header/Header";
import { url, query } from "./../utils/types";

function Playground() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const [dataViewer, setDataViewer] = useState('');
  const refEditor = React.useRef<HTMLInputElement>(null);

  function onClickPrettifyQuery() {
    const queryPrettifyed = prettify(getValues('editor'));
    setValue('editor', queryPrettifyed);
  }

  const onSubmit = async (data) => {
    console.log('data.endpoint ', data.endpoint);
    console.log('data.editor ', data.editor);
    const res = await makeRequest(data.endpoint, data.editor);
    console.log('res.data ', res.data);
    setDataViewer(prettify(JSON.stringify(res.data)));
  };

  return (
    <div className="playground">
      <Header />
      <h1>Playground</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-endpoint">
          <label htmlFor="endpoint">Endpoint</label>
          <input id="endpoint" type="text" defaultValue={url} {...register('endpoint')} />
        </div>
        <textarea ref={refEditor} {...register('editor')}>{query}</textarea>
        <button onClick={onClickPrettifyQuery}>Prettify query</button>
        <textarea className="viewer" value={dataViewer}></textarea>
        <input type="submit" />
      </form>
    </div>
  );
}

function makeRequest(url: string, query: string) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ query }),
  }).then(res => res.json());
}

function prettify(str: string) {
  const ident = (level: number) => '\u00A0'.repeat(level * 2);
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
      itemNew = `${itemNew}\u00A0`;
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
