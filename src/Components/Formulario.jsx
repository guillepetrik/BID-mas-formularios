import React from 'react'
import { useState } from 'react'
import Storage from './Storage';
import style from './Formulario.module.css';

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [ccontrasena, setCcontrasena] = useState("");
  const [submiteado, setSubmiteado] = useState(false);
  const [errorUno, setErrorUno] = useState("");
  const [errorDos, setErrorDos] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [verpass, setVerpass] = useState("");

  const crearUsuario = (e) => {
    e.preventDefault();
    const newUsuario = { nombre, apellido, email, contrasena};
    setNombre("");
    setApellido("");
    setContrasena("");
    setEmail("");
    setCcontrasena("");
    setSubmiteado(true);
    console.log("Envio de form", newUsuario);
    if ( contrasena !== ccontrasena ) {
        alert("LAS CONTRASEÑAS NO COINCIDEN");
        setSubmiteado(false);
    } else if ( ccontrasena.length < 8 ) {
      alert('Clave debe contener por lo menos 8 caracteres');
      setSubmiteado(false);
    }
    else {
        alert("Se creo el user correctamente");
    }
  }
  const formMessage = () => {
    if( submiteado ) {
  return "Gracias por enviar el formulario!";
} else {
  return "Bienvenido, rellene el form";
}
};
  const handleErrorUno = (e)=> {
    if ( e.target.value.length < 2 ) {
      setErrorUno('Debe tener al menos dos caracteres');
    } else {
      setErrorUno('');
    }
  }
  const handleErrorDos = (e)=> {
    if ( e.target.value.length < 2 ) {
      setErrorDos('Debe tener al menos dos caracteres');
    } else {
      setErrorDos('');
    }
  }
  const handleErrorMail = (e)=> {
    if ( e.target.value.length < 5 ) {
      setErrorMail('Debe tener al menos 5 caracteres');
    } else {
      setErrorMail('');
    }
  }
  const handleVerpass = (e)=> {
    if ( e.target.value.length < 8 ) {
      setVerpass('Clave debe contener por lo menos 8 caracteres');
    } else if ( contrasena !== ccontrasena ){
      setVerpass('Claves deben coincidir');
    }
    else {
      setVerpass('');
    } 
  }
  return (
    <>
      <form onSubmit={crearUsuario}>
        <h3>{ formMessage() }</h3>
        <div>
          <label>Nombre:</label>
          <input type="text" value={ nombre } onChange={ (e) => {setNombre(e.target.value); handleErrorUno(e)} }/>
          <p className={ style.error }> { errorUno } </p>
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" value={ apellido } onChange={ (e) => {setApellido(e.target.value); handleErrorDos(e)} }/>
          <p className={ style.error } > { errorDos } </p>
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={ email } onChange={ (e) => {setEmail(e.target.value); handleErrorMail(e)} }/>
          <p className={ style.error } > { errorMail }</p> 
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={ contrasena } onChange={ (e) => {setContrasena(e.target.value); handleVerpass(e)} }/>
          <p className={ style.error } > { verpass } </p>
        </div>
        <div>
          <label>Confirmar contraseña:</label>
          <input type="password" value={ ccontrasena } onChange={ (e) => {setCcontrasena(e.target.value); handleVerpass(e)} } />
          <p className={ style.error } > { verpass } </p>
        </div>
        <input type="submit" value="Crear Usuario"/>
      </form>
      <hr />
      <Storage data={[ nombre, apellido, email, contrasena, ccontrasena ]}/>
    </>
  )
}

export default Formulario