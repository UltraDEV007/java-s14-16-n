import { useLocation } from 'react-router-dom'
import './SearchedMeal.css'
import CardProduct from '../cardProduct/CardProduct'
import { useAppContext } from '../../context/AppContex'

export default function SearchedMeal() {
  const { state } = useLocation()
  const {dataProducts: food} = useAppContext()
  
  return (
    <main className='searched-meal'>
      <h3>Resultados - {state}</h3>
      <ul>
        <CardProduct products={food}/>
      </ul>
    </main>
  )
}