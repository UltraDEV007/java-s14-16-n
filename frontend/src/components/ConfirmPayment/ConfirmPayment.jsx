import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Spinner from '../share/Spinner/Spinner'
import './ConfirmPayment.css'

export default function ConfirmPayment() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(navigate, 1e3, '../pedido-aprobado')
  })

  return(
    <>
      <main className="confirm-payment">
        <h3>Estamos procesando tu pedido</h3>
        <Spinner />
      </main>
    </>
  )
}