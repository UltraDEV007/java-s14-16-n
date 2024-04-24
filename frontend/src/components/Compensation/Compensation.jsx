import { useNavigate } from "react-router-dom";
import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import Form from "../share/Form/Form";
import "./Compensation.css";
import CompensationInput from "./CompensationInput/CompensationInput";

const compensationList = {
  fail: [
    {
      name: "type",
      description: "Tipo de comida",
      checked: false,
    },
    {
      name: "time",
      description: "Tiempo de espera",
      border: true,
      checked: false,
    },
    {
      name: "quality",
      description: "Calidad de la comida",
      checked: false,
    },
  ],
  compensation: [
    {
      name: "present",
      description: "Pedido correcto más otro producto de regalo",
      checked: false,
    },
    {
      name: "refund",
      description: "Devolución del dinero",
      border: true,
      checked: false,
    },
    {
      name: "coupon",
      description: "Descuento futuro en la misma tienda",
      checked: false,
    },
  ],
};

export default function Compensation() {
  const navigate = useNavigate();

  const handleOnValueCheck = (type, index) => {
    compensationList[type][index].checked =
      !compensationList[type][index].checked;
  };

  const handleOnBtnClick = () => {
    let failChecked = compensationList.fail.find(
      (item) => item.checked === true
    );
    let compensationChecked = compensationList.compensation.find(
      (item) => item.checked === true
    );
    if (failChecked && compensationChecked) {
      setTimeout(navigate, 1e3, "../final-con-reclamo");
    }
  };
  return (
    <>
      <Form className="compensation">
        <div>
          <section>
            <h4>¿En qué falló la entrega?</h4>
            <ul>
              {compensationList.fail.map((item, key) => {
                return (
                  <CompensationInput
                    key={key}
                    item={item}
                    checked={() => handleOnValueCheck("fail", key)}
                  />
                );
              })}
            </ul>
          </section>

          <section>
            <h4>¿Qué compensación elijes?</h4>
            <ul>
              {compensationList.compensation.map((item, key) => {
                return (
                  <CompensationInput
                    key={key}
                    item={item}
                    checked={() => handleOnValueCheck("compensation", key)}
                  />
                );
              })}
            </ul>
          </section>
        </div>

        <MainBtn onClick={handleOnBtnClick}>Aceptar</MainBtn>
      </Form>
    </>
  );
}
