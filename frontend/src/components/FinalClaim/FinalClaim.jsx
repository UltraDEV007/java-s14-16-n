import "./FinalClaim.css";
import logo from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function FinalClaim() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(navigate, 1e4, "../../../inicio");
  });
  return (
    <div className="final-claim">
      <p>
        Sentimos que la tienda te haya hecho pasar un mal momento, pero estamos
        nosotros asegurándote que:
      </p>
      <h5>¡Siempre sales ganando!</h5>
      <div>
        <p>¡Te esperamos en un próximo pedido!</p>
        <img src={logo} />
      </div>
    </div>
  );
}
