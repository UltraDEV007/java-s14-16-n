import Form from "../share/Form/Form";
import "./PaymentMethod.css";
import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import { useEffect, useState } from "react";

export default function PaymentMethod() {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(0);

  const handleOnClick = () => setActive(!active);

  const handleOValueChange = (num) => {
    setValue(num);
    console.log("value: ", value);
  };

  return (
    <>
      <Form className={"payment-method"}>
        <div className="total-bar">
          <h4>Total a pagar</h4>
          <h4>
            <span>$ </span>17.000
          </h4>
        </div>

        <h5>Seleccione un método de pago</h5>

        <div>
          <label
            htmlFor="switch-method"
            className={!active ? "label-active" : ""}
          >
            Efectivo
          </label>
          <input
            type="checkbox"
            value={active}
            name="switch-method"
            onChange={handleOnClick}
          />
          <label
            htmlFor="switch-method"
            className={active ? "label-active" : ""}
          >
            Pago Online
          </label>
        </div>

        <h5>¿Con qué monto en efectivo desea pagar?</h5>
        <input
          type="number"
          placeholder="Ingresar monto en efectivo"
          className="input-cash"
          name="cash"
          onChange={(e) => handleOValueChange(e.target.value)}
        />

        {/* <ul>
          <PaymentCard />
        </ul> */}

        <MainBtn className={value > 500 ? "button-enabled" : ""}>
          Confirmar
        </MainBtn>
      </Form>
    </>
  );
}
