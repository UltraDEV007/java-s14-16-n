import React, { useContext } from 'react'
import AppContext from '../context/AppContex';
import './home.css'
import CardProduct from '../components/cardProduct/CardProduct'


function Home() {
  const { dataProducts, dataStores } = useContext(AppContext);
  return (
    <>
      <div className='cardProductContainer'>
        <CardProduct products={dataProducts} stores={dataStores}/>
      </div>
    </>
  )
}

export default Home