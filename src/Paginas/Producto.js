import React from 'react';
import Productos from '../componentes/Productos';
import '../assets/css/Producto.css'

class Producto extends React.Component{
    
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                
                <div className="container-fluid " id="producto">
                <h1>PRODUCTOS</h1>
                    <Productos/>
                </div>
                
            </div>
            
        )
    }
}

export default Producto;