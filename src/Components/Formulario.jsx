import React from 'react'
import { useState } from 'react'
import Storage from './Storage';

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("@gmail.com");
  const [contrasena, setContrasena] = useState("");
  const [ccontrasena, setCcontrasena] = useState("");

  const crearUsuario = (e) => {
    e.preventDefault();
    const newUsuario = { nombre, apellido, email, contrasena};
    setNombre("");
    setApellido("");
    setContrasena("");
    setEmail("@gmail.com");
    setCcontrasena("");
    console.log (newUsuario );
  }
  return (
    <>
      <form onSubmit={crearUsuario}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={ nombre } onChange={ (e) => setNombre(e.target.value) }/>
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" value={ apellido } onChange={ (e) => setApellido(e.target.value) } />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={ email } onChange={ (e) => setEmail(e.target.value) }/>
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={ contrasena } onChange={ (e) => setContrasena(e.target.value) }/>
        </div>
        <div>
          <label>Confirmar contraseña:</label>
          <input type="password" value={ ccontrasena } onChange={ (e) => setCcontrasena(e.target.value)} />
        </div>
        <input type="submit" value="Crear Usuario"/>
      </form>
      <hr />
      <Storage data={[ nombre, apellido, email, contrasena, ccontrasena ]}/>
    </>
  )
}

export default Formulario