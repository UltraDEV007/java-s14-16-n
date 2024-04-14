import React, { useContext } from 'react'
import AppContext from '../context/AppContex';
import './home.css'
import CardProduct from '../components/cardProduct/CardProduct'


import FoodQuery from '../components/FoodQuery/FoodQuery'

function Home() {
  const { dataProducts } = useContext(AppContext);
  return (
    <>

        <div className='homeContent'>
          <div style={{ 
            width: '100%',
             display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: '10%', textAlign: 'left' }}
          > <p style={{ fontSize: '14px', fontWeight: '500', lineHeight: '16px', textAlign: 'left', color: '#3F9BFF' }}>Los más populares</p></div>

          <div className='cardProductContainer'>
            <CardProduct products={dataProducts} />
          </div>
        </div>
    </>
  )
}

export default Home