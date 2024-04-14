import "./FinalClaim.css";
import logo from '../../assets/Logo.svg'

export default function FinalClaim() {
  return (
    <div className="final-claim">
      <p>
        Sentimos que la tienda te haya hecho pasar un mal momento, pero para
        ello estamos nosotros asegurándote que:
      </p>
      <h5>¡Siempre sales ganando!</h5>
      <div>
        <p>¡Te esperamos en un próximo pedido!</p>
        <img src={logo} />
      </div>
    </div>
  );
}
