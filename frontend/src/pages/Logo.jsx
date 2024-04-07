import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Logo.css'
import logo from '../assets/Image.jpg'

export default function Welcome() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(navigate, 2e3, 'inicio')
  })

  return (
    <main className='welcome'>
      <img src={logo} alt="Logo" />
      <p>Logo FoodlyFinds</p>
    </main>
  )
}