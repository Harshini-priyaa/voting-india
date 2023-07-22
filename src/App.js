import './App.css';
import React from 'react';
import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import Home from './componets/Home';
import Login from './componets/Login';
import Signup from './componets/Signup';
import Votepage from './componets/Votepage';
import MainVoting from './componets/MainVoting';

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/signup' element = {<Signup />}></Route>
        <Route path='/Votepage'element={<Votepage/>}></Route>
        <Route path='/MainVoting'element={<MainVoting/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
