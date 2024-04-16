import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import check from '../../assets/check.svg'
import './Approved.css'
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Approved() {
  const [goToDeliveryDetail, setGoToDeliveryDetail]= useState(false)
  const handleOrderApproved=()=>{
    console.log('voy a detalles de entrega')
    setGoToDeliveryDetail(true)
  }
  if(goToDeliveryDetail){
    return <Navigate to={'/busqueda/pagar/detalles-de-entrega?popup=tooltip'} />
  }
  return (
    <>
      <main className="approved">
        <img src={check} alt="check" />
        <h3>¡Pedido realizado con éxito!</h3>
        <p>Tu pago ha sido confirmado</p>
        <p>En breve un repartidor estará visitando tu domicilio con el pedido</p>
        <p>Al recibirlo debes confirmar si se ha cumplido el tiempo, producto y calidad</p>
        <MainBtn onClick={handleOrderApproved}>Aceptar</MainBtn>
      </main>
    </>
  )
}