import React, {useState, useEffect }from 'react'
import '../App.css';
import GetDatos from './GetDatos';

function Form() {
    const [valor, setValor] = useState([])

    useEffect(() =>{
        GetDatos(valor)
    },[])


    return (
        
        <div className="App">
          <header className="App-header">
          <input type="text" value={valor} placeholder="Buscar" onChange={(ev)=>setValor(ev.target.value)}/>
          {/* <input type="submit"/> */}
          <h1>{valor}</h1>
          </header>
          
        </div>
      );
}

export default Form