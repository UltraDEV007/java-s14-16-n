import React, { useState, useContext } from 'react'
import { Navigate } from "react-router-dom";
import AppContext from '../../context/AppContex';
import './cardProduct.css'


function CardProduct({ products, stores }) {
    const {selectedProduct, setSelectedProduct} = useContext(AppContext)
    const [goToItem, setGoToItem]= useState(false)

    const handleCardProduct = (itemId) => {
        console.log('elegi el producto con id'+ itemId)
        if (itemId !== selectedProduct) {
            setSelectedProduct(itemId);
            setGoToItem(true)
        }
    }
    console.log(selectedProduct)
    // dirigir la navegacion al detalle de producto actualizar path segun endopoint de API
    if (goToItem) {
        return <Navigate to={'/busqueda/pagar/producto-elegido'} />
      }
    
    const getStoreInfo = (storeId) => {
        const store = stores.find(store => store.id === storeId);
        return store ? { name: store.name, logo: store.image } : { name: '', logo: '' };
    };
    return (
        <>
            {products.map((item) => {
                
                 const storeInfo = getStoreInfo(item.storeId);
                 return(
                <div className='cardProduct' key={item.id} onClick={() => handleCardProduct(item.id)}>
                    <div className='cardInfo'>
                        <div className='cardInfoText'>
                            <p style={{ fontWeight: 'bold' }}>{item.name}</p>
                            <p>{storeInfo.name}</p>
                        </div>
                        <div className='cardInfoLogo'>
                            <img src={storeInfo.logo} alt='logo restaurant'></img>
                        </div>
                    </div>
                    <div className='cardImage'>
                        <img src={item.image} alt={item.name + ' imagen'} ></img>
                    </div>
                </div>)}
            )}

        </>
    )
}
export default CardProduct