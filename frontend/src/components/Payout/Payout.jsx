import { useNavigate } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import Form from "../share/Form/Form";
import MainBtn from "../share/Buttons/MainBtn/MainBtn"
import { faDollarSign, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Payout.css'
import { useState } from 'react';
import ToggleButton from '../share/ToggleButton/ToggleButton';

export default function Payout() {
  const navigate = useNavigate()
  const [money, setMoney]= useState('')

  return (
    <>
      <main>
        <Form className={'payout'}>
          <div className='payment'>
            <p>Total a pagar</p>
            <p><FontAwesomeIcon icon={faDollarSign} /> {'17.000'}</p>
          </div>
          <h3>Seleccione un método de pago</h3>
          <ToggleButton options={['Efectivo', 'Pago Online']}/>
          <p>¿Con qué monto en efectivo desea pagar?</p>
          <label >
            <span className={money ? 'transparent' : ''}>Ingresar monto en efectivo</span>
            <p>Efectivo: $ </p>
            <input 
              style={{width: `${money.length}ch`}}
              type="text" 
              name="cash"
              pattern='[0-9\.]+$'
              value={money} 
              onChange={(e, value = e.target.value) => setMoney(/^$|[0-9\.]+$/.test(value) ? value : money)}
            />
          </label>
          <MainBtn onClick={() => navigate('../procesando-pago')} disabled={17000 <= +money.replace('.', '') ? false : true}>Confirmar</MainBtn>
        </Form>
      </main>
    </>
  )
}