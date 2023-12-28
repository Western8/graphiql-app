import { useContext } from 'react';
import { LocaleContext } from '../utils/localeContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Page404.css';

function Page404() {
  const { useLocale } = useContext(LocaleContext);

  return (
    <div className="page404">
      <Header />
      <h1>404</h1>
      <h1>{useLocale.text404}</h1>
      <Footer />
    </div>
  );
}

export default Page404;
