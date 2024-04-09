import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faArrowLeft,
  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function ConfirmOrder (){
    const [goToPay, setGoToPay]= useState(false)

    const handlePagar =()=>{
        setGoToPay(true)
        console.log('hice clic en pagar')
    }
    if(goToPay){
        return <Navigate to={'/busqueda/pagar/medio-de-pago'} />
    }
    return(
        <>
        <Link to='/busqueda/pagar/producto-elegido'><FontAwesomeIcon
          className="pointer sizeUp"
          icon={faArrowLeft}
        />
        </Link>
        <button className='MyButton'onClick={handlePagar}> Pagar</button>
        </>
    )
}

export default ConfirmOrder