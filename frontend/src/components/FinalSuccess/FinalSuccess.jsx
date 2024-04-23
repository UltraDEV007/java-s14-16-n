import "./FinalSuccess.css";
import logo from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function FinalSuccess() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(navigate, 1e4, "../../../inicio");
  });
  return (
    <div className="final-success">
      <div className="content">
        <h5>¡Que lo disfrutes!</h5>
        <img src={logo} />
      </div>
      <div className="circle-container">
        <span className="circle"></span>
      </div>
    </div>
  );
}
