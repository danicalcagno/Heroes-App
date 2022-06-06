import React, { useContext } from 'react';
import { AuthContext } from '../../auth/authContext';
import { useNavigate } from 'react-router-dom'
import { types } from '../../types/types';

export const LoginScreen = () => {

  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);

  const handleLogin = () => {
    //con replace en T le impido volver al login una vez que hace el handleLogin 
    //se reemplaza la ruta anterior por Marvel y no se puede volver usando el retroceder del navegador
    
    const action = {
        type: types.login, //accion a disparar
        payload: {name: 'Daniela'} 
      }
    dispatch(action);
    
    const lastPath = localStorage.getItem('lastPath') || '/marvel';

      navigate(lastPath, 
            {replace: true}
    ); 
  
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
