import React, { useState, useContext, useEffect } from "react";
import AppContext from "./context/AppContex";
import { API_BASE_URL } from "./config";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Payment from "./pages/Payment";
import Bonus from "./pages/Bonus";
import Welcome from "./pages/Logo";
import Payout from "./components/Payout/Payout";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import ConfirmPayment from "./components/ConfirmPayment/ConfirmPayment";
import Approved from "./components/Approved/Approved";
import Compensation from "./components/Compensation/Compensation";
// conexion al json
import { products } from "./data/products";
import { stores} from './data/stores';
import Main from "./pages/Main";
import Summary from "./components/Summary/Summary";

function App() {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataStores, setDataStores] = useState ([])
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
    setDataStores(stores)
    setLoading(false);
  }, []);

  return (
    <>
      <AppContext.Provider value={{ dataProducts, dataStores }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/*" element={<Main />}>
            <Route path="inicio" element={<Home />} />
            <Route path="perfil" element={<Profile />} />
            <Route path="beneficios" element={<Bonus />} />
            <Route path="pedidos" element={<Orders />} />
            <Route path="pagos" element={<Payment />} />
          </Route>
          <Route path="/busqueda">
            <Route path=":mealId" />
            <Route path="pagar">
              <Route path="confirmar" />
              <Route path="medio-de-pago" element={<PaymentMethod />} />
              <Route path="monto-de-efectivo" element={<Payout />} />
              <Route path="procesando-pago" element={<ConfirmPayment />} />
              <Route path="pedido-aprobado" element={<Approved />} />
              <Route path="detalles-de-entrega" element={<Summary />} />
              <Route path="compensacion" element={<Compensation />} />
            </Route>
          </Route>
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
