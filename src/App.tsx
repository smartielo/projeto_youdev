import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import './style/style.css'
import Home from './pages/home';
import Sobre from './pages/sobre';
import Erro404 from './pages/erro404';

function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<Erro404/>}>
        </Route>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/sobre' element={<Sobre/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
