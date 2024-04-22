import React, { useState, useContext, useEffect } from "react";
import AppContext from "./context/AppContex";
import { uriProduct } from "./utils/const";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Bonus from "./pages/Bonus";
import Welcome from "./pages/Welcome/Welcome";
import Payout from "./components/Payout/Payout";
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
import Building from "./components/Building/Building";

function App() {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(uriProduct)
      .then((response) => {
        setDataProducts(response.data);
      })
      .catch(error => {
        console.error('Error getting data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          dataProducts,
          selectedProduct,
          setSelectedProduct,
          loading,
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
              path="busqueda"
            >
              <Route
                index
                element={<SearchedMeal />}
              />
              <Route path="pagar">
                <Route
                  path="confirmar"
                  element={<ConfirmOrder />}
                />
                
                <Route
                  path="medio-de-pago"
                  element={<Payout />}
                />
                <Route
                  path="detalle-de-pedido"
                  element={<OrderDetails />}
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
            <Route
              path="construccion"
              element={<Building />}
            />
          </Route>
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
