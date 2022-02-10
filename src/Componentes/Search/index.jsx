/* import React, {useState} from 'react' */
import './search.css'

function Search ({text,setText}){

   

    const search =(e)=>{

        setText(e.target.value)

    }
   

    return (
        
        <div className='contain__serch'>
            <h2>Consumo de api</h2>

            <input
                type="text" 
                placeholder="Barra de busqueda"
                value={text}
                onChange={search}
                className='inp__search'

            ></input>
        
        </div>


    )
    
}
export default Search