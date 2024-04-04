import { Link } from 'react-router-dom'
import Form from "../share/Form/Form";
import MainBtn from "../share/Buttons/MainBtn/MainBtn"
import { faDollarSign, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CashStamp.css'

export default function CashStamp() {
  return (
    <>
      <Form className={'cash-stamp'}>
        <Link to='..'><FontAwesomeIcon icon={faArrowLeft} /></Link>
        <h4>Porfavor, especifica el monto con el que pagarás</h4>
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
    </>
  )
}