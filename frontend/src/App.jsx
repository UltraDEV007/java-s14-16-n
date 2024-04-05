import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Payment from './pages/Payment';
import Bonus from './pages/Bonus';
import Welcome from './pages/Logo';
import Payout from './components/Payout/Payout';
import ConfirmPayment from './components/ConfirmPayment/ConfirmPayment';
import Approved from './components/Approved/Approved';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Welcome />}></Route>
          <Route path='/inicio' element={<Home/>}></Route>
          <Route path='/busqueda' >
            <Route path=':mealId' ></Route>
            <Route path='pagar'>
              <Route path='confirmar' element={<></>}></Route>
              <Route path='medio-de-pago' element={<></>}></Route>
              <Route path='monto-de-efectivo' element={<Payout />}></Route>
              <Route path='procesando-pago' element={<ConfirmPayment />}></Route>
              <Route path='pedido-aprobado' element={<Approved />}></Route>
              <Route path='detalles-de-entrega' element={<></>}></Route>
            </Route>
          </Route>
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
