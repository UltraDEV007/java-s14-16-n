import React from 'react'
import './home.css'
import CardProduct from '../components/cardProduct/CardProduct'


function Home() {
  const products = [
    {
        "id": "1",
        "storeId": "2",
        "name": "Hamburguesa clásica",
        "category": "1",
        "image": "https://drive.google.com/file/d/1yc9zH3HLSvKaW47t8rCh1bTwB4Ft8jDh/view?usp=drivesdk",
        "ingredients": ["Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Pan de hamburguesa"],
        "clarification": "",
        "price": 5000,
        "waitingTime": "10 min"
    },
    {
        "id": "2",
        "storeId": "2",
        "name": "Pizza Margarita",
        "category": "2",
        "image": "https://drive.google.com/file/d/19CdD1677Kw5V58-6BHLwhAlB4fNzt-lG/view?usp=drivesdk",
        "ingredients": ["Mozzarella", "Tomate", "Albahaca", "Masa de pizza"],
        "clarification": "",
        "price": 7000,
        "waitingTime": "15 min"
    },
    {
        "id": "3",
        "storeId": "2",
        "name": "Ensalada de atún",
        "category": "3",
        "image": "https://drive.google.com/file/d/1_obokewu4NL5_u1f62sVR936qB2BvJOR/view?usp=drivesdk",
        "ingredients": ["Lechuga", "Atún", "Huevo duro", "Tomate", "Aceitunas", "Cebolla", "Vinagreta"],
        "clarification": "",
        "price": 2000,
        "waitingTime": "10 min"
    },]

  return (
    <>
    <div className='cardProductContainer'>
      <CardProduct products={products}/>
     
    </div>
    </>
  )
}

export default Home