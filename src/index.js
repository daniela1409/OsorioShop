import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
import Bienvenida from './Paginas/Bienvenida'

import reportWebVitals from './reportWebVitals';

const user = {
  nombre: 'Daniela',
  Edad: '26'
}

ReactDOM.render(
  <React.StrictMode>
    
    
    <Bienvenida/>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
