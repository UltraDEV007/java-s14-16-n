import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import './ConfirmPayment.css'

export default function ConfirmPayment() {
  return(
    <>
      <main className="confirm-payment">
        <h3>Estamos procesando tu pedido</h3>
        <MainBtn >Aceptar</MainBtn>
      </main>
    </>
  )
}