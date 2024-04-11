import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './confirmorder.css'
import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import Backward from "../share/Buttons/Backward/Backward";


function ConfirmOrder() {
  const [goToPay, setGoToPay] = useState(false)

  const handlePagar = () => {
    setGoToPay(true)
    console.log('hice clic en pagar')
  }
  if (goToPay) {
    return <Navigate to={'/busqueda/pagar/medio-de-pago'} />
  }


  return (
    <>
      <div className="ConfirmContent">
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          {/* <Link to='/busqueda/pagar/producto-elegido'><FontAwesomeIcon
            className="pointer sizeUp"
            icon={faArrowLeft}
          />
          </Link> */}
          <Backward />
          <p>Confirmá tu Pedido</p>
        </div>

        <div className="infoConfirm">
          <div className="foodContent"><img src='https://i.pinimg.com/736x/2d/41/f7/2d41f7762a4e8b20473caada000641ff.jpg' alt='photo food'></img></div>
          <div className="orderInfoA">
            <p style={{ fontSize: '32px' }}>1 Pizza B { }</p>
            <hr style={{
              color: '#000',
              height: .06,
              width: 360,
            }} />
            <p>A llegar en tu domicilio</p>
            <p>30 min después de confirmar pago</p>
            <hr style={{
              color: '#000',
              height: .06,
              width: 360,
            }} />
          </div>
          <div className="orderInfoA">
            <p style={{ fontSize: '32px' }}>Pizzeria B</p>
            <p>Av. Cordoba 3120, Montevideo</p>
            <hr style={{
              color: '#000',
              height: .06,
              width: 360,
            }} />
          </div>
          <div className="orderInfoA">
            <p>Total a Pagar</p>
            <p style={{ fontSize: '48px', textAlign: 'center' }}>$7000</p>
          </div>

        </div>

        <MainBtn onClick={handlePagar}>Pagar</MainBtn>
      </div>
      

    </>
  )
}

export default ConfirmOrder