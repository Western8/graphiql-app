//import './Header.css';
//import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { useForm } from 'react-hook-form';
//import { useAuthState } from "react-firebase-hooks/auth";
import { fbLogOut } from './../utils/firebase';

function Header() {
  const navigate = useNavigate();

  function signOut() {
    fbLogOut();
    navigate('/', { replace: true });
  }

  return (
    <div className="sign">
      <h2>Header</h2>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default Header;
