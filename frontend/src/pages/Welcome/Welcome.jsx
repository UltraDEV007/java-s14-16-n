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
      <svg viewBox="0 0 360 271" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-131 98.091C105.796 26.3331 542.581 -74.128 395.351 98.091C211.312 313.365 -2.17296 335.634 -131 98.091Z" fill="white" stroke="white" stroke-width="4.21027"/>
      </svg>
      <img src={logo} alt="logo" />
    </main>
  )
}