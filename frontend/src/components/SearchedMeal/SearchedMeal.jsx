import { useLocation } from 'react-router-dom'
import './SearchedMeal.css'
import CardProduct from '../cardProduct/CardProduct'
import { useEffect, useState } from 'react'
import { searchMeal } from '../../utils/Api'

export default function SearchedMeal() {
  const 
    { state } = useLocation(),
    [searched, setSearch] = useState([]),
    [error, setError] = useState('');

  useEffect(() => {
    if (!!state) {
      searchMeal(state)
        .then((res) => {
          setError('')
          setSearch(res)
        })
        .catch((res) => {
          setSearch([])
          setError(res)
        })
    }
  }, [state])
  
  return (
    <main className='searched-meal'>
      <h3>{!!error ? error : 'Resultados'}</h3>
      <ul>
        <CardProduct products={searched}/>
      </ul>
    </main>
  )
}