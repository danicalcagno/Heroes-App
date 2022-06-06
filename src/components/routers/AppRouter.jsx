import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';
import {PrivateRoute} from './PrivateRoute';
import PublicRoute from './PublicRoute';



export const AppRouter = () => {
  
  return (        
    <BrowserRouter>
        <Routes>                  
            {/* La ruta del login es publica, las del dash son privadas, se deben mostrar si el usuario este logueado */}            
            <Route path="/login" element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            } />
            {/* Cualqioer ruta que venga despues del / va a renderizar el componente  PrivateRoute y se va a encargar de ver si el usuario esta autenticado o no*/}
            <Route path="/*" element={
              <PrivateRoute>
                <DashboardRouter />
              </PrivateRoute>
            } /> 
            {/* <Route path="/*" element={<DashboardRouter />} />  */}
        </Routes>
    </BrowserRouter>    
  ) 
}
