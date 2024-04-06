import React, { useState, useContext, useEffect } from 'react';
import AppContext from './context/AppContex';
import { API_BASE_URL } from './config';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
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

// conexion al json
import { products } from './data/products';

function App() {
  const [dataProducts, setDataProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // codigo para obtener los productos de la api 
    // axios
    //   .get(`${API_BASE_URL}/products`)
    //   .then((response) => {
    //     console.log('respuesta de la api:response.data')
    //     console.log(response.data)
    //     setDataProducts(response.data.content);
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     console.error('Error getting data:', error);
    //     setLoading(false);
    //   });

    setDataProducts(products);
    setLoading(false)

  }, []);


  return (
    <>
      <AppContext.Provider value={{ dataProducts }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Welcome />}></Route>
          <Route path='/inicio' element={<Home />}></Route>
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
          <Route path='/perfil' element={<Profile />}></Route>
          <Route path='/beneficios' element={<Bonus />}></Route>
          <Route path='/pedidos' element={<Orders />}></Route>
          <Route path='/pagos' element={<Payment />}></Route>
        </Routes>
        <Footer />
      </AppContext.Provider>




    </>
  )
}

export default App
