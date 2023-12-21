 import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { LocaleContext, localeEn, localeRu } from './components/utils/localeContext.ts';
// import { locale } from './components/utils/localeContext.ts';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './components/utils/firebase';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.tsx';
import Welcome from './components/Welcome/Welcome';
import Sign from './components/Sign/Sign';
import Playground from './components/Playground/Playground';
import Page404 from './components/Page404/Page404';
import { IPrivateRouteProps } from './components/utils/types';
import './App.css';

function App() {
  const [useLocale, setLocale] = useState(localeEn);
  const [user] = useAuthState(auth);

  const defaultPrivateRouteProps: Omit<IPrivateRouteProps, 'outlet'> = {
    isAuth: Boolean(user),
    authPath: '/signin',
  };
  
  return (
    <LocaleContext.Provider value={ { useLocale, setLocale } }>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Sign isSignUp={true} />} />
          <Route path="/signin" element={<Sign isSignUp={false} />} />
          <Route path='/playground' element={<PrivateRoute {...defaultPrivateRouteProps} outlet={<Playground />} />} />
          <Route path="/" element={<Welcome />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </LocaleContext.Provider>
  )
}

export default App
