import React, {useState, useEffect} from 'react'
import pizzas from '../shared/Pizza'
const Listagem = () => {

    const ItensLista = () => pizzas.map(
        pizza =>
        <li key={pizza.id} style={{listStyle: 'none'}}>
            <img src={pizza.imagem}
            alt={pizza.nome}
            style={{
                width:"150px",
                height:"100px",
                borderRadius:"8px",
                margin:"0px",
                marginLeft:"-30px"
            }}
            />
        </li>
    )

    return(

    <>
        <h2 style={{textAlign:'center'}}>Pizzas ITB</h2>
            <ul>
              <ItensLista/>
         </ul>       
    </>
    )
}

export default Listagem