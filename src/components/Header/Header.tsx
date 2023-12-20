import { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { LocaleContext, locale } from '../utils/localeContext';
import { Link } from 'react-router-dom';
//import { useAuthState } from "react-firebase-hooks/auth";
import { fbLogOut } from './../utils/firebase';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const [isScroll, setIsScroll] = useState(false);
  const { useLocale, setLocale } = useContext(LocaleContext);

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
    const keys = Object.keys(locale);
    let ind = keys.indexOf(useLocale.id) + 1;
    if (ind >= keys.length) ind = 0;
    const idLocale = keys.at(ind);
    if (idLocale) {
      setLocale(locale[idLocale]);
    }
  }

  return (
    <header className={isScroll ? 'header-small' : ' '}>
      <h2>GraphiQL</h2>
      <div className='locale' onClick={changeLocale}>{useLocale.name}</div>
      <nav>
        <Link to={`/`} className="link">{useLocale.welcome}</Link>
        <a className="link" onClick={signOut}>{useLocale.signOut}</a>
      </nav>
    </header>
  );
}

export default Header;
