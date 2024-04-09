import { Link } from "react-router-dom";
import "./PaymentCard.css";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function PaymentCard({ type = "Efectivo", value = "00.00" }) {
  const [active, setActive] = useState(false)
  const [cash, setCash]= useState(false)
  
  const handleCash=()=>{
    setCash(true)
    console.log('ingresar efectivo')
  }
  if(cash){
    return <Navigate to={'/busqueda/pagar/monto-de-efectivo'} />
  }
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
      <Link onClick={handleCash}>Ingresar monto</Link>
     
    </li>
  );
}
