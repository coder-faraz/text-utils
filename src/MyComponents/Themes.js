import React, { useState } from 'react';


export default function Themes() {

  const [mode2, setMode2] = useState('light');
  const [mode3, setMode3] = useState("light");
  const [mode4, setMode4] = useState("light");
  const [mode5, setMode5] = useState("light");
  
  let blueMode = () => {
    if(mode2 === 'light') {
      document.body.classList.add("primary");
      setMode2("primary");
    }
    else {
      document.body.classList.remove("primary");
      setMode2("light");
    }
  }

  let redMode = () => {
    if(mode3 === 'light') {
      document.body.classList.add("danger");
      setMode3("danger");
    }
    else {
      document.body.classList.remove("danger");
      setMode3("light");
    }
  }

  let greenMode = () => {
    if(mode4 === 'light') {
      document.body.classList.add("success");
      setMode4("success");
    }
    else {
      document.body.classList.remove("success");
      setMode4("light");
    }
  }

  let yellowMode = () => {
    if(mode5 === 'light') {
      document.body.classList.add("warning");
      setMode5("warning");
    }
    else {
      document.body.classList.remove("warning");
      setMode5("light");
    }
  }

  return (
    <>
    <div className="form-check form-switch" style={ {float: 'right', padding: '0px 25px',} }>
      <label className={`form-check-label text-${mode2==='light' ? 'primary': 'light'} `} htmlFor="flexSwitchCheckDefault">{mode2==='light' ? 'Enable': "Disable"} Blue Mode</label>
      <input className="form-check-input" type="checkbox" onClick={ blueMode } role="switch" id="flexSwitchCheckDefault" />
    </div>
    <div className="form-check form-switch" style={ {clear: 'right', float: 'right', padding: '0px 30px',} }>
      <label className={`form-check-label text-${mode3==='light' ? 'danger': 'light'}`} htmlFor="flexSwitchCheckDefault">{mode3==='light' ? 'Enable': 'Disable'} Red Mode</label>
      <input className="form-check-input" type="checkbox" onClick={ redMode } role="switch" id="flexSwitchCheckDefault" />
    </div>
    <div className="form-check form-switch" style={ {clear: 'right', float: 'right', padding: '0px 15px',} }>
      <label className={`form-check-label text-${mode4==='light' ? 'success': 'light'}`} htmlFor="flexSwitchCheckDefault">{mode4==='light' ? 'Enable': 'Disable'} Green Mode</label>
      <input className="form-check-input" type="checkbox" onClick={ greenMode } role="switch" id="flexSwitchCheckDefault" />
    </div>
    <div className="form-check form-switch" style={ {clear: 'right', float: 'right', padding: '0px 15px',} }>
      <label className={`form-check-label text-${mode5==='light' ? 'warning': 'light'}`} htmlFor="flexSwitchCheckDefault">{mode5==='light' ? 'Enable': 'Disable'} Yellow Mode</label>
      <input className="form-check-input" type="checkbox" onClick={ yellowMode } role="switch" id="flexSwitchCheckDefault" />
    </div>
    </>
  )
}
