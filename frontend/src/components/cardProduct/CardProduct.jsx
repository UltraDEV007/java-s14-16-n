import React, { useState, useContext } from 'react'
import { Navigate } from "react-router-dom";
import AppContext from '../../context/AppContex';
import './cardProduct.css'
import Spinner from '../share/Spinner/Spinner';

function CardProduct({ products }) {

    const { selectedProduct, setSelectedProduct, loading } = useContext(AppContext)
    const [goToItem, setGoToItem] = useState(false)

    const handleCardProduct = (id) => {
        if (id !== selectedProduct) {
            setSelectedProduct(id);
            setGoToItem(true)
        }
    }

    if (goToItem) {
        return <Navigate to={'/busqueda/pagar/producto-elegido'} />
    }

    return (
        <>
            {loading ? (
                <Spinner />
            )
                : (
                    products.slice(0, 4).map((item) => (

                        <li className='cardProductHome' key={item.productId} onClick={() => handleCardProduct(item.productId)}>
                            <div className='cardImageHome'>
                                <img src={item.productImageUrl} alt={item.name + ' imagen'} ></img>
                            </div>
                            <div className='cardInfo'>
                                <div className='cardInfoName'>
                                    <p style={{ fontSize: '16px', fontWeight: '500', lineHeight: '16px', textAlign: 'left' }} >{item.name}</p>
                                </div>
                                <div className='cardInfoStore'>
                                    <div className='contentLogo'>
                                        <img src={item.store.storeImageUrl} alt='logo restaurant'></img></div>
                                    <div className='contentTexStore'>
                                        <p style={{ fontSize: '10px', fontWeight: '400', lineHeight: '16px', textAlign: 'left' }}>{item.store.name}</p>
                                        <p style={{ fontSize: '8px', fontWeight: '300', lineHeight: '16px', textAlign: 'left' }}>
                                            {item.store.address}
                                        </p>
                                    </div>
                                </div>
                                <div className='cardProductDetail'>
                                    <p style={{ fontSize: '10px', fontWeight: '500', lineHeight: '16px', textAlign: 'left', color: '#3F9BFF' }}>
                                        {item.category.name}
                                    </p>
                                    <p style={{ fontSize: '18px', fontWeight: '500', lineHeight: '16px', textAlign: 'rigth' }}><span style={{ color: '#3F9BFF' }}>$</span>{item.price}</p>
                                </div>
                            </div>

                        </li>)
                    )
                )
            }



        </>
    )
}
export default CardProduct