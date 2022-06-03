import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './components/routers/AppRouter';

const init=() => {
  return JSON.parse(localStorage.getItem('user'))|| {logged: false};
}
export const HeroesApp = () => {
  const[user, dispatch] = useReducer(authReducer, {}, init);
  //voy a guaradr el usuario loguedo en el local Storage con un useeffect
  useEffect(() => {
    if(!user)  return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [user])
  
  return (
    <div>
      {/* authContext provee informaion a toda la app puedo usar estos datos y mostrarlos en cq parte de la app*/}
      <AuthContext.Provider value={{
          user,
          dispatch
      }}>
          <AppRouter/>
      </AuthContext.Provider>
    </div>
  )
}
