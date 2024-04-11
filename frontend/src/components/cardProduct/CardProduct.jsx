import React, { useState, useContext } from 'react'
import { Navigate } from "react-router-dom";
import AppContext from '../../context/AppContex';
import './cardProduct.css'


function CardProduct({ products }) {
    const { selectedProduct, setSelectedProduct } = useContext(AppContext)
    const [goToItem, setGoToItem] = useState(false)

    const handleCardProduct = (itemId) => {
        console.log('elegi el producto con id' + itemId)
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

    // const getStoreInfo = (id) => {
    //     console.log(id)
    //     const store = stores.find(store => store.id === storeId);
    //     return store ? { name: store.name, logo: store.image } : { name: '', logo: '' };
    // };
    
    return (
        <>
            {products.map((item) => (

                // const store = getStoreInfo(item.productId);
                // return (
                    <div className='cardProduct' key={item.productId} onClick={() => handleCardProduct(item.id)}>
                        <div className='cardImage'>
                            <img src={item.productImageUrl} alt={item.name + ' imagen'} ></img>
                        </div>
                        <div className='cardInfo'>
                            <div className='cardInfoName'>
                                <p style={{fontSize:'16px', fontWeight:'500', lineHeight:'16px', textAlign:'left'}} >{item.name}</p>
                            </div>
                            <div className='cardInfoStore'>
                                <div className='contentLogo'>
                                    <img src={item.storeId.storeImageUrl} alt='logo restaurant'></img></div>
                                <div className='contentTexStore'>
                                    <p style={{fontSize:'10px', fontWeight:'400', lineHeight:'16px', textAlign:'left'}}>{item.storeId.name}</p>
                                    <p style={{fontSize:'8px', fontWeight:'300', lineHeight:'16px', textAlign:'left'}}>
                                        {item.storeId.address}
                                        </p>
                                </div>
                            </div>
                            <div className='cardProductDetail'>
                                <p style={{fontSize:'10px', fontWeight:'500', lineHeight:'16px', textAlign:'left', color:'#3F9BFF'}}>
                                    {item.categoryId.name}
                                    </p>
                                <p style={{fontSize:'18px', fontWeight:'500', lineHeight:'16px', textAlign:'rigth' }}><span style={{color:'#3F9BFF'}}>$</span>{item.price}</p>
                            </div>
                        </div>

                    </div>)
            )}
            

        </>
    )
}
export default CardProduct