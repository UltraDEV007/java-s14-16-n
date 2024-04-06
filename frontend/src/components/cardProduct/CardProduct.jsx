import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import './cardProduct.css'


function CardProduct({ products }) {
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
    
   
    return (
        <>
            {products.map((item) => (
                <div className='cardProduct' key={item.id} onClick={() => handleCardProduct(item.id)}>
                    <div className='cardInfo'>
                        <div className='cardInfoText'>
                            <p style={{ fontWeight: 'bold' }}>{item.name}</p>
                            <p>Nombre Restaurante</p>
                        </div>
                        <div className='cardInfoLogo'>
                            <img src='' alt='logo restaurant'></img>
                        </div>
                    </div>
                    <div className='cardImage'>
                        <img src={item.image} alt={item.name + ' imagen'} ></img>
                    </div>
                </div>
            ))}

        </>
    )
}
export default CardProduct