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
      <img src={logo} alt="logo" />
    </main>
  )
}