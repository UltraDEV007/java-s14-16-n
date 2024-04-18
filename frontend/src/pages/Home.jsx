import React, { useContext } from 'react'
import AppContext from '../context/AppContex';
import './home.css'
import CardProduct from '../components/cardProduct/CardProduct'


import FoodQuery from '../components/FoodQuery/FoodQuery'

function Home() {
  const { dataProducts } = useContext(AppContext);
  return (
    <>

        <main className='homeContent'>
          <div style={{ 
            width: '100%',
             display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: '10%', textAlign: 'left' }}
          > <p style={{ fontSize: '14px', fontWeight: '500', lineHeight: '16px', textAlign: 'left', color: '#3F9BFF'}}>Los más populares</p></div>

          <div className='cardProductContainerHome'>
            <CardProduct products={dataProducts} />
          </div>
        </main>
    </>
  )
}

export default Home