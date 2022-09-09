import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Cart from '../Pages/Cart';


function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/cart" element={ <Cart /> } />
    </Routes>
  );
}

export default Routers;
