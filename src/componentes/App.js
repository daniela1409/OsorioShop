import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Bienvenida from '../Paginas/Bienvenida';
import Producto from '../Paginas/Producto'

function App() {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Bienvenida}/>
            <Route exact path="/Producto" component={Producto}/>
        </BrowserRouter>
    )
}

export default App;