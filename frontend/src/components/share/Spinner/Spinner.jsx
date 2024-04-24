import "./Spinner.css";

export default function Spinner({ msg = "Cargando..." }) {
  return (
    <div className="spinner">
      <span>{msg}</span>
    </div>
  );
}
