import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faTrashCan, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import CloseStore from '../../assets/Close-Store.svg';
import OrderIcon from '../../assets/Order-Icon.svg';
import DeliveryIcon from '../../assets/Delivery-Icon.svg';
import { Link } from "react-router-dom";
import { order } from "../../data/order";
import './orderdetails.css'

function OrderDetails() {
  const finalOrder = [...order]
  const [goToPedir, setGoToPedir] = useState(false)
  const [showOrderList, setShowOrderList] = useState(false)

  const subTotal = finalOrder.reduce((total, item) => total + item.productTotal, 0);
  const delivery = order[0].entrega === 0 ? 2000 : 0;
  const efectivo = 20000

  const handlePedir = () => {
    setGoToPedir(true)
  }
  if (goToPedir) {
    return <Navigate to={'../confirmar'} state={finalOrder} />
  }

  const handleToggleOrderList = () => {
    setShowOrderList(!showOrderList);
  }


  return (
    <>

      <main className="ConfirmContent">
        <div className="infoStoreContent">
          <div className="storeInfo">
            <div className="storeLogoConfirmar" style={{ fontSize: '10px', fontWeight: '300', lineHeight: '16px' }}><img src={finalOrder[0].store.storeImageUrl} alt="logo store"></img></div>
            <div className="storeDataConfirmar">
              <p style={{ fontSize: '12px', fontWeight: '400', lineHeight: '16px' }}>{finalOrder[0].store.name}</p>
              <p style={{ fontSize: '10px', fontWeight: '300', lineHeight: '16px' }}>{finalOrder[0].store.address}</p>
            </div>
          </div>
          <div className="iconContent">
            <img src={CloseStore}
              alt='Store Icon'
              style={{ width: '25px' }} />
          </div>
        </div>

        <div className="orderContent">

          <section className="ListTitle" onClick={handleToggleOrderList}>
            <div><FontAwesomeIcon icon={faAngleDown} /></div>
            <p style={{ fontWeight: '700', fontSize: '16px', lineHeight: '16px' }}>Lista del pedido</p>
            <div><FontAwesomeIcon icon={faAngleDown} /></div>
          </section>

          <section className={showOrderList ? "articlesContent active" : "articlesContent"}>
            {finalOrder.map((item, index) =>
              <div className="itemContent" key={index}>
                <div className="mealData">
                  <div className="mealDataImage"><img src={item.productImageUrl} alt="food image"></img></div>
                  <div className="mealDataFood">
                    <div className="mealDataFoodStore">
                      <p style={{ fontSize: '13px', fontWeight: '500', lineHeight: '16px' }}>{item.name}</p>
                      <p style={{ fontSize: '10px', fontWeight: '500', lineHeight: '16px', color: '#3F9BFF' }}>{item.category.name}</p>
                    </div>
                    <div onClick={() => handleDeleteItem(index)}><FontAwesomeIcon icon={faTrashCan} style={{ color: '#979797' }} /></div>
                  </div>
                </div>
                <div className="count-ConfirmOrder">
                  <p className="info-item-confirm">Cantidad: {item.productCant}</p>
                  <p className="info-item-confirm">Total: $ {item.productTotal.toLocaleString()} </p>
                </div>
              </div>
            )}

          </section>
          <section className="totalCount-ConfirmOrder">
            <div className="totalItem-OrderDetail ">
              <div className="itemIcon">
              <img src={OrderIcon}
                  alt='Order Icon'
                  style={{ width: '16px' }} />
                <p>Pedido</p>
              </div>
              <p><span style={{ color: '#3F9BFF' }}>$</span>{subTotal.toLocaleString()}</p>
            </div>
            {delivery !== 0 && <div className="totalItem-OrderDetail">
              <div className="itemIcon">
              <img src={DeliveryIcon}
                  alt='Store Icon'
                  style={{ width: '20px' }} />
                <p>Envío</p>
              </div>
              <p><span style={{ color: '#3F9BFF' }}>$</span>{delivery.toLocaleString()}</p>
            </div>}
            <div className="totalItem-OrderDetail ">
              <p>Total a pagar</p>
              <p><span style={{ color: '#3F9BFF' }}>$</span>{(subTotal + delivery).toLocaleString()}</p>
            </div>
            <div className="totalItem-OrderDetail ">
              <p>Pago en efectivo</p>
              <p><span style={{ color: '#3F9BFF' }}>$</span>{efectivo.toLocaleString()}</p>
            </div>
            <div className="totalItem-OrderDetail ">
              <div className="itemIcon">
                <FontAwesomeIcon icon={faStopwatch} />
                <p>Tiempo estimado</p>
              </div>
              <p>30<span style={{ color: '#3F9BFF' }}>min</span></p>
            </div>
          </section>
        </div>
        <button className='btn-SendOrder-orderDetail' onClick={handlePedir}>Hacer el Pedido</button>
        {/* <button className={`btn-confirm-goPay ${emptyList ? 'btn-noConfirm' : ''}`} onClick={handlePagar} disabled={emptyList}>Ir a pagar</button> */}
      </main>




    </>
  )
}

export default OrderDetails