import React, { useState, useContext, useEffect } from "react";
import AppContext from "./context/AppContex";
import { API_BASE_URL } from "./config";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
// import Orders from "./pages/Orders";
// import Payment from "./pages/Payment";
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
import Main from "./pages/Main";
import Summary from "./components/Summary/Summary";
import FinalClaim from "./components/FinalClaim/FinalClaim";
import FinalSuccess from "./components/FinalSuccess/FinalSuccess";
import ConfirmOrder from "./components/ConfirmOrder/ConfirmOrder";
import SearchedMeal from "./components/SearchedMeal/SearchedMeal";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import { data } from './data/findall';
import { order } from './data/order'

function App() {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataOrder, setDataOrder] = useState([])
  const [selectedProduct, setSelectedProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // codigo para obtener los productos de la api
    // axios
    //   .get(API_BASE_URL)
    //   .then((response) => {
    //     console.log('respuesta de la api:response')
    //     console.log(response.data)
    // //     // setDataProducts(response.data);
    //     setLoading(false);
    // })
    // .catch(error => {
    //   console.error('Error getting data:', error);
    //   setLoading(false);
    // });

    setDataProducts(data);
    setDataOrder(order)
    setLoading(false);
  }, []);


  return (
    <>
      <AppContext.Provider
        value={{
          dataProducts,
          dataOrder,
          selectedProduct,
          setSelectedProduct,
        }}
      >

        <Routes>
          {/* <Route
            path="/"
            element={<Welcome />}
          />
          <Route
            path="/*"
            element={<Main />}
          >
            <Route
              path="inicio"
              element={<Home />}
            >
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
            <Route 
              path="busqueda"
            >
              <Route 
                index 
                element={<SearchedMeal />} 
              />
              <Route path="pagar">
                <Route
                  path="confirmar"
                  element={<ConfirmOrder order={dataOrder}/>}
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
              <Route path=":mealId" />
            </Route>
          </Route> */}

          {/* RUTAS SIN ANIDAMIENTO */}

          <Route path="/" element={<Welcome />} />
          <Route path="/*" element={<Main />}>
            <Route path="inicio" element={<Home />} />
            <Route path="beneficios" element={<Bonus />} />
            <Route path="perfil" element={<Profile />} />
            <Route path="busqueda" element={<SearchedMeal />} />
            <Route path="busqueda/pagar/producto-elegido" element={<ChosenProduct />} />
            <Route path="busqueda/pagar/confirmar" element={<ConfirmOrder order={dataOrder} />} />
            <Route path="busqueda/pagar/medio-de-pago" element={<PaymentMethod />} />
            <Route path="busqueda/pagar/monto-de-efectivo" element={<Payout />} />
            <Route path="busqueda/pagar/detalle-de-pedido" element={<OrderDetails />} />
            <Route path="busqueda/pagar/procesando-pago" element={<ConfirmPayment />} />
            <Route path="busqueda/pagar/pedido-aprobado" element={<Approved />} />
            <Route path="busqueda/pagar/detalles-de-entrega" element={<Summary />} />
            <Route path="busqueda/pagar/aviso-de-llegada" element={<Arrival />} />
            <Route path="busqueda/pagar/compensacion" element={<Compensation />} />
            <Route path="busqueda/pagar/final-con-reclamo" element={<FinalClaim />} />
            <Route path="busqueda/pagar/final-exitoso" element={<FinalSuccess />} />
          </Route>
        </Routes>

      </AppContext.Provider>
    </>
  );
}

export default App;
