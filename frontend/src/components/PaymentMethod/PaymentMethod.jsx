import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Form from "../share/Form/Form";
import { Link } from "react-router-dom";
import './PaymentMethod.css'
import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import PaymentCard from "./PaymentCard/PaymentCard";

export default function PaymentMethod() {
  return (
    <>
      <Form className={'payment-method'}>
        <Link to="..">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h4>Elegí tu medio de pago</h4>

        <div>
            <label htmlFor="switch-method">Pago on-line</label>
            <input type="checkbox" name="switch-method"/>
            <label htmlFor="switch-method">Efectivo u otros</label>
        </div>

        <ul>
            <PaymentCard/>
        </ul>

        <MainBtn>Ingresar otro medio de pago</MainBtn>
      </Form>
    </>
  );
}
