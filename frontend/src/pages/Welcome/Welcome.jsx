import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import './Welcome.css'


export default function Welcome() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(navigate, 15e2, 'inicio')
  })

  return (
    <main className='welcome'>
      <svg viewBox="0 0 325 156" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 56.9332C139.43 16.2339 389.24 -40.745 305.034 56.9332C199.778 179.031 77.6797 191.662 4 56.9332Z" stroke-width="4.21027"/>
      </svg>
      <img src={logo} alt="logo" />
    </main>
  )
}