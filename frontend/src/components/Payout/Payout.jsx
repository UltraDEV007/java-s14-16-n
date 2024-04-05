import { Link } from 'react-router-dom'
import Form from "../share/Form/Form";
import MainBtn from "../share/Buttons/MainBtn/MainBtn"
import { faDollarSign, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Payout.css'

export default function Payout() {
  return (
    <>
      <main>
        <Form className={'cash-stamp'}>
          <Link to='..'><FontAwesomeIcon icon={faArrowLeft} /></Link>
          <h3>Porfavor, especifica el monto con el que pagarás</h3>
          <hr />
          <p>valor total de la compra ${'7000'}</p>
          <label >
            <FontAwesomeIcon icon={faDollarSign} />
            <input type="number" name="amount" />
          </label>
          <MainBtn>Hacer pedido</MainBtn>
          <MainBtn>Quiero agregar</MainBtn>
          <hr />
        </Form>
      </main>
    </>
  )
}