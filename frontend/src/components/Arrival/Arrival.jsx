import { useState } from "react";
import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import "./Arrival.css";

export default function Arrival() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOnOpenDialog = () => setOpenDialog(!openDialog);

  return (
    <div className="arrival" onClick={handleOnOpenDialog}>
      <section className="sign">
        <h4>¡Nos confirman que tu pedido ha llegado a tu domicilio!</h4>
      </section>
      {openDialog && (
        <div className="choice">
          <div>
            <p>
              ¿Tu pedido ha cumplido con el tiempo de llegada, tipo de producto
              y calidad?
            </p>
            <div>
              <MainBtn>si</MainBtn>
              <MainBtn>no</MainBtn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
