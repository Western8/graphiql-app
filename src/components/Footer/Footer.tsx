import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <Link to={`/`} className="link">Welcome</Link>
    </footer>
  );
}

export default Footer;
