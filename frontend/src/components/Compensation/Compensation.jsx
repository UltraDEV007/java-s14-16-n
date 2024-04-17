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
    },
    {
      name: "time",
      description: "Tiempo de espera",
      border: true,
    },
    {
      name: "quality",
      description: "Calidad de la comida",
    },
  ],
  compensation: [
    {
      name: "present",
      description: "Pedido correcto más otro producto de regalo",
    },
    {
      name: "refund",
      description: "Devolución del dinero",
      border: true,
    },
    {
      name: "coupon",
      description: "Descuento futuro en la misma tienda",
    },
  ],
};

export default function Compensation() {
  const navigate = useNavigate()

  const handleOnBtnClick = () => setTimeout(navigate, 1e3, 'busqueda/pagar/final-con-reclamo')
  return (
    <>
      <Form className="compensation">
        <div>
          <section>
            <h4>¿En qué falló la entrega?</h4>
            <ul>
              {compensationList.fail.map((item, key) => {
                return <CompensationInput key={key} item={item} />;
              })}
            </ul>
          </section>

          <section>
            <h4>¿Qué compensación elijes?</h4>
            <ul>
              {compensationList.compensation.map((item, key) => {
                return <CompensationInput key={key} item={item} />;
              })}
            </ul>
          </section>
        </div>

        <MainBtn onClick={handleOnBtnClick}>Aceptar</MainBtn>
      </Form>
    </>
  );
}
