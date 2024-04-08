import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/ChosenProduct.css";
import imagePizzeria from "../assets/ImagePizzeria.svg";
import imageComida from "../assets/ImageComida.svg";

const ChosenProduct = () => {
  return (
    <main className="mainWrapper">
      <div className="backward">
        <FontAwesomeIcon
          className="pointer sizeUp"
          icon={faArrowLeft}
        />
      </div>
      <section className="infoRestaurant">
        <img
          src={imagePizzeria}
          alt="Store"
        />
        <p>
          A retirar en Av. Cordoba 3120 Montevideo
          <FontAwesomeIcon
            className="pointer sizeUp"
            icon={faUpRightFromSquare}
          />
        </p>
      </section>
      <section className="infoFood">
        <div className="nameFood">
          {" "}
          <h2>Pizza B</h2>
        </div>
        <div className="imageFood">
          <img
            src={imageComida}
            alt="Food"
          />
        </div>
      </section>
      <p className="ingredients">Ingredientes: A, B, C, D, E</p>
    </main>
  );
};

export default ChosenProduct;
