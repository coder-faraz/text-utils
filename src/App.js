import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './MyComponents/Header';
import Body from './MyComponents/Body';
import About from './MyComponents/About';
import Themes from './MyComponents/Themes';


function App() {

  const [mode, setMode] = useState('light');

  let toggler = () => {
    if(mode === 'light') {
      document.body.classList.add("dark");
      document.title="TextUtils - Dark Mode";
      setMode('dark');
    }
    else {
      document.body.classList.remove("dark");
      document.title="TextUtils - Light Mode";
      setMode('light');
    }
  }


  return (
    <Router>
      <>
      <Header title='TextUtils' look={ mode } toggleMode={ toggler }/>
      <Routes>
          <Route exact path="/about" element={ <About look={ mode }/> } />
          <Route exact path="/" element={ <> <Body heading='Enter Your Text Here' look={ mode } /> <Themes /> </>} />
          {/* <Route index element={ <Themes /> } /> */}
      </Routes>
      </>
    </Router>
  );
}

export default App;
