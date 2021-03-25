import React from 'react'
import '../assets/css/Card.css'

class Card extends React.Component{

    render(){

        const {Producto, valor} = this.props /*Para no usar el this props en todos los campos*/
        return(

            <div className="card container-fluid w-50" id="card">
                <div className = "card-header w-100" id="header">
                    <h2>Información producto</h2>
                </div>
                <div className = "card-body w-100" id="body">
                    <h1>{Producto}</h1>
                    <h1>{valor}</h1>
                </div>
            </div>
            
        )
    }
}

export default Card