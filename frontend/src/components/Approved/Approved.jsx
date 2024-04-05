import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import check from '../../assets/check.svg'
import './Approved.css'

export default function Approved() {
  return (
    <>
      <main className="approved">
        <img src={check} alt="check" />
        <hgroup>
          <h3>¡Pedido realizado con éxito!</h3>
          <p>Tu pago ha sido confirmado</p>
        </hgroup>
        <p>En breve un repartidor estará visitando tu domicilio con tu pedido</p>
        <p>Al recibirlo debes confirmar si se ha cumplido el tiempo, tiempo y calidad</p>
        <MainBtn>Aceptar</MainBtn>
      </main>
    </>
  )
}