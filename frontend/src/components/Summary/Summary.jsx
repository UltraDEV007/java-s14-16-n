import { useNavigate } from 'react-router-dom'
import logo from '../../assets/pizza.jpg'
import './Summary.css'
import Tooltip from '../Tooltip/Tooltip'
import { useAppContext } from '../../context/AppContex'
import { useEffect } from 'react'

export default function Summary() {
  const 
    navigate = useNavigate(),
    { dataOrder } = useAppContext(),
    [order] = dataOrder;
  
  useEffect(() => {
    setTimeout(navigate, 5e3, '../aviso-de-llegada')
  })

  return (
    <>
      <main className='summary'>
        <img src={order.productImageUrl} alt='comida'/>
        <h3>{`1 ${order.name}`}</h3>
        <hr />
        <div>
          <p>A llegar en tu domicilio {'San Juan 206'}</p>
          <p>En 30 minutos</p>
        </div>
        <hr />
        <address>
          <h3>{order.store.name}</h3>
          <p>{order.store.address}</p>
        </address>
        <hr />
        <p className='price'>TOTAL PAGADO ${order.money}</p>
        <Tooltip >Cuando llegue el pedido confirma que todo está bien</Tooltip>
      </main>
    </>
  )
}