// import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Sign from './components/Sign/Sign';
import Playground from './components/Playground/Playground';
import Page404 from './components/Page404/Page404';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
        <Route path="/unctrl" element={<FormUnctrl />} />
        <Route path="/ctrl" element={<FormCtrl />} />
*/}
        <Route path="/signup" element={<Sign isSignUp={true} />} />
        <Route path="/signin" element={<Sign isSignUp={false} />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
