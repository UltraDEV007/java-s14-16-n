import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Form from "../share/Form/Form";
import { Link } from "react-router-dom";
import "./PaymentMethod.css";
import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import PaymentCard from "./PaymentCard/PaymentCard";
import { useState } from "react";

export default function PaymentMethod() {
  const [active, setActive] = useState(false);
  return (
    <>
      <Form className={"payment-method"}>
        <Link to="..">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h4>Elegí tu medio de pago</h4>

        <div>
          <label
            htmlFor="switch-method"
            style={{ fontWeight: !active ? "600" : "100"}}
          >
            Pago on-line
          </label>
          <input
            type="checkbox"
            value={active}
            name="switch-method"
            onChange={() => setActive(!active)}
            />
          <label
            htmlFor="switch-method"
            style={{ fontWeight: active ? "600" : "100"}}
          >
            Efectivo u otros
          </label>
        </div>

        <ul>
          <PaymentCard />
        </ul>

        <MainBtn>Ingresar otro medio de pago</MainBtn>
      </Form>
    </>
  );
}
