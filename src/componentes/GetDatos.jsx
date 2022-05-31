import React from 'react'
import axios from 'axios'
import Form from './componentes/Form'
const GetDatos = async(input) =>{
    
    let url = `
    https://api.giphy.com/v1/gifs/search?api_key=x3uEKBShX4BJ8ho2z7ihD5HXMKlFjgvZ&q=${input}&limit=12&offset=0&rating=g&lang=en`

    const data = await axios.get(url)
    console.log(data.data.data)
}

export default GetDatos