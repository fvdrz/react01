import React from 'react'
import AppForm from './AppForm'

const AppLista = (props) => {
  return (
    <div style={{background:"purpure", padding: "10px"} }>
       <h1>AppLista.js</h1>
        <AppForm />
       <h3>Lista de clientes</h3>

       <p>No 1 Juan Manuel Ticona Vega  ...xxxx...A</p>
       <p>No 2 Rosa Maria Luque Conde   ...xxxx...A</p>
       <p>No 3 Jose Ricardo Lopez Moral ...xxxx...A</p>
    </div>
  )
}

export default AppLista
