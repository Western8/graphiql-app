import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './../utils/firebase';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Welcome.css';

function Welcome() {
  const [user] = useAuthState(auth);

  return (
    <div className="welcome">
      <Header />
      <h1>Welcome to GraphiQL-app!</h1>
      <h2 className='welcome-h2'>GraphiQL is a playground/IDE for graphQL requests. </h2>
      <div className='nav-wrapper'>
        <div className='nav-block'>
          <h3>Let's go!</h3>
          <div className='nav-buttons'>
            <button className={user ? 'hidden' : ''}><Link to={`/signin`} className="link link-button">Sign in</Link></button>
            <button className={user ? 'hidden' : ''}><Link to={`/signup`} className="link link-button">Sign up</Link></button>
            <button className={user ? '' : 'hidden'}><Link to={`/playground`} className="link link-button">Go to Playground GraphiQL</Link></button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
