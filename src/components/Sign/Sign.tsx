import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, fbLogIn, fbRegister } from './../utils/firebase';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './../utils/yup';
import { LocaleContext } from '../utils/localeContext';
import { IPropsSign, IDataSign, ILocale } from '../utils/types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import './Sign.css';

function Sign({ isSignUp }: IPropsSign) {
  const navigate = useNavigate();
  const { useLocale } = useContext(LocaleContext);
  const [popup, setPopup] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataSign>({ resolver: yupResolver(schema) });

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      navigate('/playground', { replace: true });
    }
  });

  const onSubmit = async (data: IDataSign) => {
    if (isSignUp) {
      const res = await fbRegister(data.email, data.password);
      if (res instanceof Error) {
        setPopup(res.message);
        setTimeout(setPopup, 5000, '');
      }
    } else {
      const res = await fbLogIn(data.email, data.password);
      if (res instanceof Error) {
        setPopup(res.message);
        setTimeout(setPopup, 5000, '');
      }
    }
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
          <div className="error">
            {useLocale[errors.email?.message as keyof ILocale]
              ? useLocale[errors.email?.message as keyof ILocale]
              : errors.email?.message}
          </div>
          <div className="input-password">
            <label htmlFor="password">{useLocale.password}</label>
            <input id="password" type="password" {...register('password')} />
          </div>
          <div className="error">
            {useLocale[errors.password?.message as keyof ILocale]
              ? useLocale[errors.password?.message as keyof ILocale]
              : errors.password?.message}
          </div>
          <button type="submit">{useLocale.submit}</button>
        </form>
      </div>
      <Popup message={popup} />
      <Footer />
    </section>
  );
}

export default Sign;
