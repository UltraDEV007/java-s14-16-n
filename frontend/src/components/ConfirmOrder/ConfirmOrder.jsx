import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import OrderIcon from '../../assets/Order-Icon.svg';
import StoreIcon from '../../assets/Store-Info-Button.svg';
import DeliveryIcon from '../../assets/Delivery-Icon.svg';
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContex';
import './confirmorder.css';

function ConfirmOrder({ order }) {
  const [goToPay, setGoToPay] = useState(false)
  const [showOrderList, setShowOrderList] = useState(false)
  const [newOrder, setNewOrder] = useState([...order]);
  const [emptyList, setEmptyList] = useState(false);

  if (!order || order.length === 0) {
    return <div>No hay órdenes para confirmar</div>;
  }

  const subTotal = newOrder.reduce((total, item) => total + item.productTotal, 0);
  const delivery = order[0].entrega === 0 ? 2000 : 0;

  const handlePagar = () => {
    setGoToPay(true)
  }
  if (goToPay) {
    return <Navigate to={'../medio-de-pago'} state={subTotal + delivery} />
  }

  const handleToggleOrderList = () => {
    setShowOrderList(!showOrderList);
  }
  const handleDeleteItem = (index) => {
    const updateOrder = [...newOrder];
    updateOrder.splice(index, 1); // Elimina el elemento segun el indice recibido
    setNewOrder(updateOrder)
    if (updateOrder.length === 0) {
      setEmptyList(true)
    }

  }

  return (
    <>

      <main className="ConfirmContent">
        <div className="infoStoreContent">
          <div className="storeInfo">
            <div className="storeLogoConfirmar" style={{ fontSize: '10px', fontWeight: '300', lineHeight: '16px' }}><img src={order[0].store.storeImageUrl} alt="logo store"></img></div>
            <div className="storeDataConfirmar">
              <p style={{ fontSize: '12px', fontWeight: '400', lineHeight: '16px' }}>{order[0].store.name}</p>
              <p style={{ fontSize: '10px', fontWeight: '300', lineHeight: '16px' }}>{order[0].store.address}</p>
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
              {newOrder.map((item, index) =>
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

            </section>)}
          <section className="totalCount-ConfirmOrder">
            <div className="totalItem ">
              <div className="itemIcon">
                <img src={OrderIcon}
                  alt='Order Icon'
                  style={{ width: '16px' }} />
                <p>Pedido</p>
              </div>
              <p><span style={{ color: '#3F9BFF' }}>$</span>{subTotal.toLocaleString()}</p>
            </div>
            {delivery !== 0 && <div className="totalItem">
              <div className="itemIcon">
                <img src={DeliveryIcon}
                  alt='Store Icon'
                  style={{ width: '20px' }} />
                <p>Envío</p>
              </div>
              <p><span style={{ color: '#3F9BFF' }}>$</span>{delivery.toLocaleString()}</p>
            </div>}
            <div className="totalItem ">
              <p>Total</p>
              <p><span style={{ color: '#3F9BFF' }}>$</span>{(subTotal + delivery).toLocaleString()}</p>
            </div>
          </section>
        </div>

        <button className={`btn-confirm-goPay ${emptyList ? 'btn-noConfirm' : ''}`} onClick={handlePagar} disabled={emptyList}>Ir a pagar</button>
      </main>




    </>
  )
}

export default ConfirmOrder