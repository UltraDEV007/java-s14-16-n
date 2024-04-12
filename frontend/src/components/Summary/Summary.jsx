import { useNavigate } from 'react-router-dom'
import logo from '../../assets/pizza.jpg'
import './Summary.css'

export default function Summary() {
  const navigate = useNavigate()

  // useEffect(() => {
  //   setTimeout(navigate, 1e4, '/busqueda/pagar/aviso-de-llegada')
  // })

  return (
    <>
      <main className='summary'>
        <img src={logo} alt='comida'/>
        <h3>{'1 Pizza Carbonara con huevo'}</h3>
        <hr />
        <div>
          <p>A llegar en tu domicilio {'San Juan 206'}</p>
          <p>En 30 minutos</p>
        </div>
        <hr />
        <address>
          <h3>{'Fundamentos Pizza'}</h3>
          <p>{'Av. Córdoba 3120, Montevideo'}</p>
        </address>
        <hr />
        <p className='price'>TOTAL PAGADO ${17000}</p>
        <p className='box'>Cuando llegue el pedido confirma que todo está bien</p>
      </main>
    </>
  )
}