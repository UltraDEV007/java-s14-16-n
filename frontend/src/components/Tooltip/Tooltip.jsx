import { useRef } from "react";
import MainBtn from "../share/Buttons/MainBtn/MainBtn";
import Popup from "../share/Popup/Popup";
import './Tooltip.css';

export default function Tooltip({
  children,
  name = 'tooltip',
}) {
  const fn = useRef(null)

  return (
    <Popup name={name} fn={fn} >
      <div className="tooltip" >
        <p>{children}</p>
        <MainBtn onClick={() => fn.current()} >OK</MainBtn>
      </div>
    </Popup>
  )
}