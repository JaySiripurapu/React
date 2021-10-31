import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Raji from './Raji';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Raji name={"villian"} />
    <Raji name={"villian"}/>
    <Raji name={"heor"}/>
    <Raji name={"heorine"}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
