import { useEffect, useRef, useState } from "react";
import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import "./Arrival.css";
import { useNavigate } from "react-router-dom";
import Popup from "../share/Popup/Popup";

let paths = ["../final-exitoso", "../compensacion"];
export default function Arrival() {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const fn = useRef(null);

  useEffect(() => {
    setTimeout(navigate, 1e4, '../aviso-de-llegada?popup=choice')
  }, [])

  const handleOnBtnClick = (path) => {
    fn.current()
    setTimeout(navigate, 1e3, path);
  };

  return (
    <div className="arrival">
      <section className="sign">
        <h4>¡Nos confirman que tu pedido ha llegado a tu domicilio!</h4>
      </section>

      <Popup name={'choice'} fn={fn}>
        <div className="choice">
          <div>
            <p>
              ¿Tu pedido ha cumplido con el tiempo de llegada, tipo de producto
              y calidad?
            </p>
            <div>
              <MainBtn onClick={() => handleOnBtnClick(paths[0])}>si</MainBtn>
              <MainBtn onClick={() => handleOnBtnClick(paths[1])}>no</MainBtn>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
}
