import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//recebe o app.js e joga as infos no root
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*ex 01 <h1>Hello React</h1>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

