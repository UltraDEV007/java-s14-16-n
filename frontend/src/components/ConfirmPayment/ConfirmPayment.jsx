import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './ConfirmPayment.css'

export default function ConfirmPayment() {
  const navigate = useNavigate()

  useEffect(() => {
    // setTimeout(navigate, 1e3, '../pedido-aprobado')
  })

  return(
    <>
      <main className="confirm-payment">
        <h3>Estamos procesando tu pedido</h3>
        <svg viewBox="0 0 360 533" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio='none'>
          <path d="M359.5 1.5C263.5 17.5 148 82.5 0 220L0.5 407.5C10.9137 396.998 23 391.5 40.5 392.5C75 397.5 109.5 500 174 526C238.5 552 316 488 359.5 518V1.5Z" />
        </svg>
      </main>
    </>
  )
}