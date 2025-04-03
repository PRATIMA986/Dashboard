import React from 'react';
import './App.css';
import './assets/css/Style.css';
import Dashboard from '../src/Dashboard';
import Home from '../src/pages/Home';
import Complaints from '../src/pages/Complaints';
import Configurations from '../src/pages/Configurations';
import Masters from '../src/pages/Masters';
import Permissions from '../src/pages/Permissions';
import Users from '../src/pages/Users';
import Roles from '../src/pages/Roles';
import Reports from '../src/pages/Reports';
import Notification from '../src/pages/Notification';
import { useState } from 'react';
import Login from './Login';
import { ThemeProvider } from "@mui/material/styles";
import { getTheme } from './theme/Theme';



function App() {

  const [appState, setappState] = React.useState(sessionStorage.getItem("appState") ? sessionStorage.getItem("appState") : sessionStorage.setItem('appState','Login'));
  const [IsLoggedIn, setIsLoggedIn] = React.useState(sessionStorage.getItem("IsLoggedIn") ? sessionStorage.getItem("IsLoggedIn") : false)
  const [mode, setMode]=React.useState('light')

  function menuhandler(menuname){
    setappState(menuname)
    sessionStorage.setItem("appState", menuname)
 }
  return (
    <ThemeProvider theme={getTheme(mode)}>
    

           {
              (appState === null || appState === "Login") && <Login setappState={setappState}/>
           } 
            {
              appState == 'dashboard' && <Dashboard setappState={setappState} appState={appState} mode={mode} setMode={setMode}/>
            } 
  </ThemeProvider>

 

       
    
  );
}

export default App;



       

          