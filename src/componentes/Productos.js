import React from 'react';
import Card from './Card'

class Productos extends React.Component{
    
    state={
        productos:[]
    }
    
    
    
    
    async componentDidMount(){
        await this.fetchProductos()
    }

    fetchProductos = async () => {
        let res = await fetch('https://api.mercadolibre.com/sites/MCO/search?q=Motorola%20G6')
        let data = await res.json()
        var productos = data.results
        this.setState({
            productos
        })
        
        console.log(this.state.productos[1].thumbnail)
    }


    render(){
        return(
            <div>
                
                
                {
                    
                    this.state.productos.map((prod) => {

                        

                        return(

                            <Card
                                id = {prod.id}
                                producto = {prod.title}
                                valor = {prod.price}
                                cantidad = {prod.available_quantity}
                                imagen = {prod.thumbnail}
                            
                            />
                        )
                            
                        
                        
                    })
                }

            </div>
        )
    }
}

export default Productos;