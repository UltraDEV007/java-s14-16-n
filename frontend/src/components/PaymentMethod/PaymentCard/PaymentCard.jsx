import { Link } from "react-router-dom";
import "./PaymentCard.css";
import { useState } from "react";

export default function PaymentCard({ type = "Efectivo", value = "00.00" }) {
  const [active, setActive] = useState(false)
  return (
    <li className="payment-card" onClick={() => setActive(!active)}>
      <input
        type="radio"
        required
        onChange={() => setActive(!active)}
        checked={active}
      />
      <div>
        <h5>{type}</h5>
        <p>Pagas: ${value}</p>
      </div>
      <Link to={".."}>Ingresar monto</Link>
    </li>
  );
}
