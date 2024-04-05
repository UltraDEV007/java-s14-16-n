import React from 'react'
import './cardProduct.css'


function CardProduct({ products }) {

    return (
        <>
            {products.map((item) => (
                <div className='cardProduct' key={item.id}>
                    <div className='cardInfo'>
                        <div className='cardInfoText'>
                            <p>{item.name}</p>
                            <p>Nombre Restaurante</p>
                        </div>
                        <div className='cardInfoLogo'>
                            <img src='' alt='logo restaurant'></img>
                        </div>
                    </div>
                    <div className='cardImage'>
                       
                        <img src='https://s3.abcstatics.com/media/gurmesevilla/2012/01/comida-rapida-casera.jpg' alt='food image'></img>
                        </div>
                </div>
            ))}

        </>
    )
}
export default CardProduct