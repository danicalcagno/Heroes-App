import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';



export const AppRouter = () => {
  return (        
    <BrowserRouter>
        <Routes>                  
            <Route path="/login" element={<LoginScreen />} /> 
            <Route path="/*" element={<DashboardRouter />} /> 
        </Routes>
    </BrowserRouter>    
  ) 
}
