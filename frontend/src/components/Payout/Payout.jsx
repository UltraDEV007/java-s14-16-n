import { Link } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import Form from "../share/Form/Form";
import MainBtn from "../share/Buttons/MainBtn/MainBtn"
import { faDollarSign, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Payout.css'
import { useState } from 'react';

export default function Payout() {
  const [sendOrder, setSendOrder]= useState(false)
  const [addToOrder, setAddToOrder]= useState(false)
  const handleSendOrder= ()=>{
    console.log('enviar pedido')
    setSendOrder(true)
  }
  if(sendOrder){
    return <Navigate to={'/busqueda/pagar/procesando-pago'} />
  }
  const handleAdd= ()=>{
    console.log('agregar al pedido')
    setAddToOrder(true)
  }
  if(addToOrder){
    return <Navigate to={'/inicio'} />
  }
  return (
    <>
      <main>
        <Form className={'cash-stamp'}>
          <Link to='/busqueda/pagar/medio-de-pago'><FontAwesomeIcon icon={faArrowLeft} /></Link>
          <h3>Porfavor, especifica el monto con el que pagarás</h3>
          <hr />
          <p>valor total de la compra ${'7000'}</p>
          <label >
            <FontAwesomeIcon icon={faDollarSign} />
            <input type="number" name="amount" />
          </label>
          <MainBtn onClick={handleSendOrder}>Hacer pedido</MainBtn>
          <MainBtn onClick={handleAdd}>Quiero agregar</MainBtn>
          <hr />
        </Form>
      </main>
    </>
  )
}