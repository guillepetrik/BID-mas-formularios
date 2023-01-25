import React from 'react'

const Storage = props => {
    const [ nombre, apellido, email, contrasena, ccontrasena ] = props.data ;
    return (
        <div>
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Email: {email}</p>
            <p>Contraseña {contrasena}</p>
            <p>Confirmar Contraseña: {ccontrasena}</p>
        </div>
    )
}

export default Storage