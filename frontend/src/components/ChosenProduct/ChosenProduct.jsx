import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./ChosenProduct.css";
import ImageComida from "../../assets/ImageComida.svg";
import ImagePizzeria from "../../assets/ImagePizzeria.svg";
const ChosenProduct = () => {
  return (
    <main className="mainWrapper">
      <section className="backward">
        <FontAwesomeIcon
          className="pointer sizeUp"
          icon={faArrowLeft}
        />
      </section>
      <section className="infoRestaurant">
        <img
          src={ImagePizzeria}
          alt="imagen Pizzeria"
        />
        <p>Av. Córdoba 3120 Montevideo</p>
        <p>
          30 minutos luego del pago
          <FontAwesomeIcon
            className="sizeUp pointer"
            icon={faUpRightFromSquare}
          />
        </p>

        <div></div>
      </section>
      <section className="infoFood">
        <article className="nameFood">
          <h2>PIZZA B</h2>
          <h2>$7000</h2>
        </article>
        <article className="imageFood">
          <img
            src={ImageComida}
            alt="imagen comida"
          />
        </article>
      </section>
      <h4>Ingredientes: A, B, C, D, E </h4>
      <div className="row">
        <p>Aclaraciones</p>
        <input
          className="inputText"
          type="text"
        />
      </div>
      <div className="rowBtns">
        <input
          className="MyButton"
          type="button"
          value="+ - 1"
        />
        <input
          className="MyButton"
          type="button"
          value="Agregar"
        />
      </div>
      <div className="columnBtns">
        <h2>¿Quieres sumar algo más?</h2>
        <input
          className="MyButton"
          type="button"
          value="Ver más menus"
        />
        <input
          className="MyButton"
          type="button"
          value="Confirmar"
        />
      </div>
    </main>
  );
};

export default ChosenProduct;
