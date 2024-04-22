import React, { useState, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import OrderIcon from '../../assets/Order-Icon.svg';
import StoreIcon from '../../assets/Store-Info-Button.svg';
import DeliveryIcon from '../../assets/Delivery-Icon.svg';
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContex';
import './confirmorder.css';

function ConfirmOrder() {
  let { state } = useLocation();
  const order = state ? state.productData : null;
  console.log(order)

  const [goToPay, setGoToPay] = useState(false)
  const [showOrderList, setShowOrderList] = useState(false)
  const [delivery, setDelivery] = useState(order.retiro ? 0 : 2000);
  const [emptyList, setEmptyList] = useState(false);
  const [subTotal, setSubTotal] = useState(order.productQuantity ? order.price * order.productQuantity : 0);

  if (!order || Object.keys(order) === 0) {
    return <div>No hay órdenes para confirmar</div>;
  }

  // si recibe un array
  // const subTotal = newOrder.reduce((total, item) => total + item.productTotal, 0);
  // const delivery = order[0].entrega === 0 ? 2000 : 0;


  const handlePagar = () => {
    setGoToPay(true)
  }
  if (goToPay) {
    return <Navigate to={'../medio-de-pago'} state={{...order, total: subTotal + delivery}} />
  }

  const handleToggleOrderList = () => {
    setShowOrderList(!showOrderList);
  }
  const handleDeleteItem = () => {
    setEmptyList(true)
    setSubTotal(0)
    setDelivery(0)
    
    // const updateOrder = [...newOrder];
    // updateOrder.splice(index, 1); // Elimina el elemento segun el indice recibido
    // setNewOrder(updateOrder)
    // if (updateOrder.length === 0) {
    //   setEmptyList(true)
    // }
    // // actualizar el subtotal
    // const newSubTotal = updateOrder.reduce((total, item) => total + item.productTotal, 0);
    // setSubTotal(newSubTotal);

  }

  return (
    <>

      <main className="ConfirmContent">
        <div className="infoStoreContent">
          <div className="storeInfo">
            <div className="storeLogoConfirmar" style={{ fontSize: '10px', fontWeight: '300', lineHeight: '16px' }}><img src={order.store.storeImageUrl} alt="logo store"></img></div>
            <div className="storeDataConfirmar">
              <p style={{ fontSize: '12px', fontWeight: '400', lineHeight: '16px' }}>{order.store.name}</p>
              <p style={{ fontSize: '10px', fontWeight: '300', lineHeight: '16px' }}>{order.store.address}</p>
            </div>
          </div>
          <div className="iconContent">
            <img src={StoreIcon}
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
          {emptyList ?
            (<p>Su lista quedó vacía. Vuelva a armar su pedido</p>)
            :
            (<section className={showOrderList ? "articlesContent active" : "articlesContent"}>
              {/* {newOrder.map((item, index) => */}
              <div className="itemContent" >
                <div className="mealData">
                  <div className="mealDataImage"><img src={order.productImageUrl} alt="food image"></img></div>
                  <div className="mealDataFood">
                    <div className="mealDataFoodStore">
                      <p style={{ fontSize: '13px', fontWeight: '500', lineHeight: '16px' }}>{order.name}</p>
                      <p style={{ fontSize: '10px', fontWeight: '500', lineHeight: '16px', color: '#3F9BFF' }}>{order.category.name}</p>
                    </div>
                    <div onClick={() => handleDeleteItem()}><FontAwesomeIcon icon={faTrashCan} style={{ color: '#979797' }} /></div>
                  </div>
                </div>
                <div className="count-ConfirmOrder">
                  <p className="info-item-confirm">Cantidad: {order.productQuantity ? order.productQuantity : 0}</p>
                  <p className="info-item-confirm">Total: $ {subTotal} </p>
                </div>
              </div>
              {/* // )} */}
            </section>)}

          <section className="totalCount-ConfirmOrder">
            
            <div className="totalItem ">
              <div className="itemIcon">
                <img src={OrderIcon}
                  alt='Order Icon'
                  style={{ width: '16px' }} />
                <p>Pedido</p>
              </div>
              <p><span style={{ color: '#3F9BFF' }}>$</span>{subTotal} </p>
            </div>
            {delivery !== 0 && <div className="totalItem">
              <div className="itemIcon">
                <img src={DeliveryIcon}
                  alt='Store Icon'
                  style={{ width: '20px' }} />
                <p>Envío</p>
              </div>
              <p><span style={{ color: '#3F9BFF' }}>$</span>{delivery}</p>
            </div>}
            <div className="totalItem ">
              <p>Total</p>
              <p><span style={{ color: '#3F9BFF' }}>$</span>{(subTotal + delivery)}</p>
            </div>
          </section>
        </div>

        <button className={`btn-confirm-goPay ${emptyList ? 'btn-noConfirm' : ''}`} onClick={handlePagar} disabled={emptyList}>Ir a pagar</button>
      </main>




    </>
  )
}

export default ConfirmOrder