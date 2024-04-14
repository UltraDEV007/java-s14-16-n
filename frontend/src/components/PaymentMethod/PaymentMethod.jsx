import Form from "../share/Form/Form";
import "./PaymentMethod.css";
import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import { useEffect, useState } from "react";
import ToggleButton from "../share/ToggleButton/ToggleButton";
import { useNavigate, useNavigation } from "react-router-dom";

// testing (delete later)
let pay = 17000;
export default function PaymentMethod() {
  const [value, setValue] = useState(0);
  const [isValidAmount, setValidAmount] = useState(true);
  const navigate = useNavigate()
  const handleOnBtnClick = () => {
    setValidAmount(value >= pay);

    if(value >= pay) setTimeout(navigate, 1e3, '../detalles-de-entrega')
  };

  const handleOnValueChange = (num) => {
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

        <ToggleButton options={["Efectivo", "Pago Online"]} />

        <h5>¿Con qué monto en efectivo desea pagar?</h5>
        <input
          type="number"
          placeholder="Ingresar monto en efectivo"
          className={`input-cash ${isValidAmount ? "" : "input-wrong"}`}
          name="cash"
          onChange={(e) => handleOnValueChange(e.target.value)}
        />
        {!isValidAmount && <label htmlFor="cash">Monto insuficiente.</label>}

        <MainBtn
          className={value > 500 ? "button-enabled" : ""}
          onClick={handleOnBtnClick}
        >
          Confirmar
        </MainBtn>
      </Form>
    </>
  );
}
