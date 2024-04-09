import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import "./Arrival.css";

export default function Arrival() {
  return (
    <div className="arrival">
      <section className="sign">
        <h4>¡Nos confirman que tu pedido ha llegado a tu domicilio!</h4>
        <p>
          ¿Tu pedido ha cumplido con el tiempo de llegada, tipo de producto y
          calidad?
        </p>
      </section>
      <section className="choice">
        <MainBtn>si</MainBtn>
        <MainBtn>no</MainBtn>
      </section>
    </div>
  );
}
