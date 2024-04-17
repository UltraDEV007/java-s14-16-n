import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import check from '../../assets/check.svg'
import './Approved.css'
import { useNavigate } from "react-router-dom";

export default function Approved() {
  const navigate = useNavigate()
  
  return (
    <>
      <main className="approved">
        <img src={check} alt="check" />
        <h3>¡Pedido realizado con éxito!</h3>
        <p>Tu pago ha sido confirmado</p>
        <p>En breve un repartidor estará visitando tu domicilio con el pedido</p>
        <p>Al recibirlo debes confirmar si se ha cumplido el tiempo, producto y calidad</p>
        <MainBtn onClick={() => navigate('../detalles-de-entrega?popup=tooltip')}>Aceptar</MainBtn>
      </main>
    </>
  )
}