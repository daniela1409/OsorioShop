import React from 'react'
import '../assets/css/Card.css'

class Card extends React.Component{

    render(){

        const {id, producto, valor, cantidad, imagen} = this.props /*Para no usar el this props en todos los campos*/
        return(

            <div className="card container-fluid w-75 col-12 my-4" id="card">
                
                <div className = "card-body w-100 row" id="body">

                    <div className = "col-4">
                        <img src={imagen}/>
                    </div>
                    <div className = "col-4">
                    <h6 key={id}>{id}</h6>
                        <h6>{producto}</h6>
                        <h6 >{valor}</h6>
                        <h6>{cantidad}</h6>
                    </div>
                    
                    
                    
                </div>
            </div>
            
        )
    }
}

export default Card