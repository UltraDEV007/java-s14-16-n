import "./FinalSuccess.css";
import logo from "../../assets/Logo.svg";

export default function FinalSuccess() {
  return (
    <div class="final-success">
      <div class="content">
        <h5>¡Que lo disfrutes!</h5>
        <img src={logo} />
      </div>
      <div class="circle-container">
        <span class="circle"></span>
      </div>
    </div>
  );
}
