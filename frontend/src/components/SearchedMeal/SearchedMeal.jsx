import { useParams } from 'react-router-dom'
import './SearchedMeal.css'
import CardProduct from '../cardProduct/CardProduct'
import { useAppContext } from '../../context/AppContex'

export default function SearchedMeal() {
  const { mealName } = useParams()
  const {dataProducts: food} = useAppContext()
  
  return (
    <main className='searched-meal'>
      <h3>Resultados - {mealName}</h3>
      <ul>
        <CardProduct products={food}/>
      </ul>
    </main>
  )
}