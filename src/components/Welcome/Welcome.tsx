import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LocaleContext } from '../utils/localeContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../utils/firebase';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Welcome.css';

function Welcome() {
  const [user] = useAuthState(auth);
  const { useLocale } = useContext(LocaleContext);

  return (
    <div className="welcome">
      <Header />
      <h1>{useLocale.welcomeTitle}</h1>
      <h2 className="welcome-h2">{useLocale.welcomeDesc}</h2>
      <div className="nav-wrapper">
        <div className="nav-block">
          <h3>{useLocale.go}</h3>
          <div className="nav-buttons">
            <button className={user ? 'hidden' : ''}>
              <Link to={`/signin`} className="link link-button">
                {useLocale.signIn}
              </Link>
            </button>
            <button className={user ? 'hidden' : ''}>
              <Link to={`/signup`} className="link link-button">
                {useLocale.signUp}
              </Link>
            </button>
            <button className={user ? '' : 'hidden'}>
              <Link to={`/playground`} className="link link-button">
                {useLocale.goPlayground}
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
