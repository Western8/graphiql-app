import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocaleContext, localeList } from '../utils/localeContext';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, fbLogOut } from './../utils/firebase';
import './Header.css';
import { ILocaleList } from '../utils/types';

function Header() {
  const navigate = useNavigate();
  const [isScroll, setIsScroll] = useState(false);
  const { useLocale, setLocale } = useContext(LocaleContext);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const handleScroll = () => {
      const minScroll = 100;
      setIsScroll(window.scrollY > minScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function signOut() {
    fbLogOut();
    navigate('/', { replace: true });
  }

  function changeLocale() {
    const keys = Object.keys(localeList);
    let ind = keys.indexOf(useLocale.id) + 1;
    if (ind >= keys.length) ind = 0;
    const idLocale = keys.at(ind);
    if (idLocale) {
      setLocale(localeList[idLocale as keyof ILocaleList]);
      console.log('11111111111TESTTTTTTTTTTTTTTTTTT change locale click idLocale', idLocale);
    }
  }

  return (
    <header className={isScroll ? 'header-small' : ' '}>
      <h2>GraphiQL</h2>
      <div className="locale" onClick={changeLocale}>
        {useLocale.name}
      </div>
      <nav>
        <Link to={`/`} className="link">
          {useLocale.welcome}
        </Link>
        <Link to={`/signin`} className={`link ${user ? 'hidden' : ''}`}>
          {useLocale.signIn}
        </Link>
        <Link to={`/signup`} className={`link ${user ? 'hidden' : ''}`}>
          {useLocale.signUp}
        </Link>
        <a className={`link  ${user ? '' : 'hidden'}`} onClick={signOut}>
          {useLocale.signOut}
        </a>
      </nav>
    </header>
  );
}

export default Header;
