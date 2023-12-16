import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import { useAuthState } from "react-firebase-hooks/auth";
import { fbLogOut } from './../utils/firebase';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const [isScroll, setIsScroll] = useState(false);

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

  return (
    <header className={isScroll ? 'header-small' : ' '}>
      <h2>GraphiQL</h2>
      <nav>
        <Link to={`/`} className="link">Welcome</Link>
        <a className="link" onClick={signOut}>Sign out</a>
      </nav>
    </header>
  );
}

export default Header;
