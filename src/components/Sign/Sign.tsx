//import './Sign.css';
//import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { useForm } from 'react-hook-form';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, fbLogIn, fbRegister } from './../utils/firebase';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './../utils/yup';
import { IDataItem } from '../utils/types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Sign( { isSignUp }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //const [ isSignUp, setIsSignUp ] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataItem>({ resolver: yupResolver(schema) });

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      // console.log('1111111111 user', user);
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
      <h1>{`${isSignUp ? 'Sign up' : 'Sign in'}`}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-email">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>
        <div className="input-password">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" {...register('password')} />
          <p>{errors.password?.message}</p>
        </div>
        <input type="submit" />
      </form>
      <Footer />
    </section>
  );
}

export default Sign;
