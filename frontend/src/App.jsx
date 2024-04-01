import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Payment from './pages/Payment';
import Bonus from './pages/Bonus';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/inicio' element={<Home/>}></Route>
        <Route path='/perfil' element={<Profile/>}></Route>
        <Route path='/beneficios' element={<Bonus/>}></Route>
        <Route path='/pedidos' element={<Orders/>}></Route>
        <Route path='/pagos' element={<Payment/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
