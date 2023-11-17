import React from 'react'

const AppForm = (props) => {
  return (
    <div style={ {background:"red", padding: "10px"}}>
      <form>
        <button>Cerrar aplicación</button>

        <h2>Registrar (AppForm.js)</h2>

        <input name= 'nombre' type= 'text'placeholder= 'nombres' /> <br/>
        <input name= 'edad' type= 'text'placeholder= 'edad' /> <br/>
        <select>
          <option value="">Seleccione genero</option>
          <option value="masculino">masculino</option>
          <option value="femenino">femenino</option>
        </select>
        <button>Guardar/Actualizar</button>
      </form>
    </div>
  )
}

export default AppForm
