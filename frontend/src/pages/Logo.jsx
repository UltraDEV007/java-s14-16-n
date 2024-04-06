import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(navigate, 2e3, 'inicio')
  })

  return (
    <>
      <p>Logo</p>
    </>
  )
}