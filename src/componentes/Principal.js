import React from 'react';
import '../assets/css/principal.css'

function Principal(){
    
      
    return(
        <div className="card container-fluid  w-50 h-25">

            <div className = "card-body w-100 row">
                <div className="col-12">
                    <label className="w-50">Nombre del producto</label>
                    <input className="w-50" id="inProducto"></input>

                </div>
                <div className="col-12 w-100 d-flex justify-content-center">
                    
                    <button className="w-25 my-3" type="button">Buscar</button>
                    
                </div>
            </div>
                
        </div>
    );
}

export default Principal;