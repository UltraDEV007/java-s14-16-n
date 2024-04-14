import React, { useState, useContext, useEffect } from "react";
import AppContext from "./context/AppContex";
import { API_BASE_URL } from "./config";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Payment from "./pages/Payment";
import Bonus from "./pages/Bonus";
import Welcome from "./pages/Welcome/Welcome";
import Payout from "./components/Payout/Payout";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import ConfirmPayment from "./components/ConfirmPayment/ConfirmPayment";
import Approved from "./components/Approved/Approved";
import Compensation from "./components/Compensation/Compensation";
import ChosenProduct from "./components/ChosenProduct/ChosenProduct";
import Arrival from "./components/Arrival/Arrival";
import SearchResult from "./components/SearchResult/SearchResult";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// conexion al json
import { data } from './data/findall';
// import { products } from "./data/products";
// import { stores } from "./data/stores";
import Main from "./pages/Main";
import Summary from "./components/Summary/Summary";
import FinalClaim from "./components/FinalClaim/FinalClaim";
import FinalSuccess from "./components/FinalSuccess/FinalSuccess";
import ConfirmOrder from "./components/ConfirmOrder/ConfirmOrder";
import SearchedMeal from "./components/SearchedMeal/SearchedMeal";

function App() {
  const [dataProducts, setDataProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // codigo para obtener los productos de la api
    // axios
    //   .get(`${API_BASE_URL}`)
    //   .then((response) => {
    //     console.log('respuesta de la api:response.data')
    //     console.log(response.data)
    //     // setDataProducts(response.data.content);
    //     setLoading(false);
      // })
      // .catch(error => {
      //   console.error('Error getting data:', error);
      //   setLoading(false);
      // });

    setDataProducts(data);
    setLoading(false);
  }, []);


  return (
    <>
      <AppContext.Provider
        value={{
          dataProducts,
          selectedProduct,
          setSelectedProduct,
        }}
      >
      
        <Routes>
          <Route
            path="/"
            element={<Welcome />}
          />
          <Route
            path="/*"
            element={<Main />}
          >
            <Route
              path="inicio"
            >
              <Route 
                path=':mealName'
                element={<SearchedMeal />}
              />
              <Route 
                index 
                element={<Home />}
              />
            </Route>
            <Route
              path="perfil"
              element={<Profile />}
            />
            <Route
              path="beneficios"
              element={<Bonus />}
            />
            <Route
              path="pedidos"
              element={<Orders />}
            />
            <Route
              path="pagos"
              element={<Payment />}
            />
            <Route path="busqueda/*">
              <Route path=":mealId" />
              <Route path="pagar">
                <Route
                  path="confirmar"
                  element={<ConfirmOrder />}
                />
                <Route
                  path="medio-de-pago"
                  element={<PaymentMethod />}
                />
                <Route
                  path="monto-de-efectivo"
                  element={<Payout />}
                />
                <Route
                  path="procesando-pago"
                  element={<ConfirmPayment />}
                />
                <Route
                  path="pedido-aprobado"
                  element={<Approved />}
                />
                <Route
                  path="detalles-de-entrega"
                  element={<Summary />}
                />
                <Route
                  path="compensacion"
                  element={<Compensation />}
                />
                <Route
                  path="final-con-reclamo"
                  element={<FinalClaim />}
                />
                <Route
                  path="final-exitoso"
                  element={<FinalSuccess />}
                />
                <Route
                  path="producto-elegido"
                  element={<ChosenProduct />}
                />
                <Route
                  path="aviso-de-llegada"
                  element={<Arrival />}
                />
                <Route
                  path="resultado-de-busqueda"
                  element={<SearchResult />}
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
