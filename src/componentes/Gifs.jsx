import React, {useState, useEffect} from 'react'
import GetDatos from './GetDatos'

const Gifs = () => {

    const [gifs, setGifs] = useState([])
    useEffect(() =>{
        GetDatos(valor)
    })

  return (
    <div>Gifs</div>
  )
}

export default Gifs