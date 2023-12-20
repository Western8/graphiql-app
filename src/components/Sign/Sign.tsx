//import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { LocaleContext } from '../utils/localeContext';
// import { useAppDispatch } from '../store/hooks';
import { useForm } from 'react-hook-form';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, fbLogIn, fbRegister } from './../utils/firebase';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './../utils/yup';
import { IDataItem } from '../utils/types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Sign.css';

function Sign({ isSignUp }) {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { useLocale } = useContext(LocaleContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataItem>({ resolver: yupResolver(schema) });

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      navigate('/playground', { replace: true });
    }
  }, [user]);

  const onSubmit = (data: IDataItem) => {
    /*
    const dataItem: IDataItem = {
      email: data.email,
      password: data.password,
    };
    */

    if (isSignUp) {
      fbRegister(data.email, data.password);
    } else {
      fbLogIn(data.email, data.password);
    }


    //dispatch(setDataList({ dataItem }));
    //navigate('/', { replace: true });
  };

  return (
    <section className="sign">
      <Header />
      <h1>{`${isSignUp ? useLocale.signUp : useLocale.signIn}`}</h1>
      <div className="form-sign-wrapper">
        <form className="form-sign" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-email">
            <label htmlFor="email">{useLocale.email}</label>
            <input id="email" type="text" {...register('email')} />
          </div>
          <div className="error">{useLocale[errors.email?.message]}</div>
          <div className="input-password">
            <label htmlFor="password">{useLocale.password}</label>
            <input id="password" type="password" {...register('password')} />
          </div>
          {/* <div className="error">{errors.password?.message}</div> */}
          <div className="error">{useLocale[errors.password?.message]}</div>
          <button type="submit">{useLocale.submit}</button>
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default Sign;
