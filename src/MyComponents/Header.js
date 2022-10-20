import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


export default function Header(props) {

    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.look} bg-${props.look}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${props.path==='/'? 'active' : ''}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${props.path==='/about'? 'active' : ''}`} to="/about">About</Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <label className={`form-check-label text-${props.look==='light' ? 'dark':'light'}`} >Enable {props.look==='light' ? 'dark':'light'} Mode</label>
              <input className="form-check-input" type="checkbox" role="switch" id='checkbox' onClick={props.toggleMode} />
            </div>
          </div>
        </div>
      </nav>
    );
}


Header.propTypes = {
  title: PropTypes.string,    //sets datatypes of your props, helps in debugging your code
}


Header.defaultProps = {
  title: 'Your Title here',     //sets a default prop value of the prop, this value is taken if nothing is passed
}

