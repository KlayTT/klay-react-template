import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Initialize from './Initialize';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Initialize />
    <Initialize />
    <Initialize />
    <Initialize />
    <Initialize />
    <Initialize />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
