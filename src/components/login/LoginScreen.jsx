import React from 'react';
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    //con replace en T le impido volver al login una vez que hace el handleLogin 
    //se reemplaza la ruta anterior por Marvel y no se puede volver usando el retroceder del navegador
      navigate('/Marvel', 
              {replace: true}); 
  }

  return (
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr/>

        <button className = 'btn btn-primary'
                onClick = { handleLogin } >
            Aceptar
        </button>
    </div>
  )
}
