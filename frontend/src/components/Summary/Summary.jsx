import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Image.jpg'
import './Summary.css'

export default function Summary() {
  const navigate = useNavigate()

  // useEffect(() => {
  //   setTimeout(navigate, 1e4, '/busqueda/pagar/aviso-de-llegada')
  // })

  return (
    <>
      <main>
        <figure>
          <img src={logo} alt='comida'/>
          <p>Comida</p>
        </figure>
        <h3>{'1 Pizza B'}</h3>
        <hr />
        <p>A llegar en tu domicilio en 30 minutos</p>
        <hr />
        <hgroup>
          <h3>{'Pizzería B'}</h3>
          <p>{'Av. Córdoba 3120, Montevideo'}</p>
        </hgroup>
        <hr />
        <p>Total a pagar ${7000}</p>
        <p className='box'>Cuando llegue el pedido confirma que todo está bien</p>
      </main>
    </>
  )
}