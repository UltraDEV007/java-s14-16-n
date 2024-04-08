import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import './cardProduct.css'


function CardProduct({ products, stores }) {
    const [selectedProduct, setSelectedProduct] = useState();
    const [goToItem, setGoToItem]= useState(false)

    const handleCardProduct = (itemId) => {
        if (itemId !== selectedProduct) {
            setSelectedProduct(itemId);
            setGoToItem(true)
        }
    }
    // dirigir la navegacion al detalle de producto actualizar path segun endopoint de API
    // if (goToItem) {
    //     return <Navigate to={'/productos/' + selectedProduct} />
    //   }
    
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