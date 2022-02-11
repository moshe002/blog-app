import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import Home from './pages/home.js';
import CreatePost from './pages/CreatePost.js';
import Login from './pages/login.js';

import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';


function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
    <nav>
      <Link to="/"> Home </Link>
      
      {!isAuth ? (
        <Link to="/login"> Login </Link> 
        ) : ( 
        <>
          <Link to="/createpost"> Create Post </Link>
          <button onClick={signUserOut}> Logout </button>
        </>
        )}
    </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
