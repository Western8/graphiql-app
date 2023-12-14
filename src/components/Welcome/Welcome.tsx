//import './Welcome.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Welcome() {
  return (
    <div className="welcome">
      <Header />
      <h1>Welcome to GraphiQL-app!</h1>
      <h2>GraphiQL is a playground/IDE for graphQL requests. </h2>
      <nav>
        <Link to={`/signin`} className="link">
          Sign in
        </Link>
        <Link to={`/signup`} className="link">
          Sign up
        </Link>
        <Link to={`/playground`} className="link">
          Go to Playground GraphiQL 
        </Link>
      </nav>
    </div>
  );
}

export default Welcome;
