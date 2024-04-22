import { useLocation, useNavigate } from 'react-router-dom'
import Form from "../share/Form/Form";
import MainBtn from "../share/Buttons/MainBtn/MainBtn"
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Payout.css'
import { useState } from 'react';
import ToggleButton from '../share/ToggleButton/ToggleButton';

export default function Payout() {
  const 
    navigate = useNavigate(),
    [money, setMoney]= useState(''),
    { state } = useLocation();

  return (
    <>
      <main>
        <Form className={'payout'}>
          <div className='payment'>
            <p>Total a pagar</p>
            <p><FontAwesomeIcon icon={faDollarSign} /> {state}</p>
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
          <MainBtn onClick={() => navigate('../procesando-pago')} disabled={state <= +money.replace('.', '') ? false : true}>Confirmar</MainBtn>
        </Form>
      </main>
    </>
  )
}