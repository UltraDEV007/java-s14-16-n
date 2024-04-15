import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop, faAngleDown, faTrashCan, faMotorcycle, faBox } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContex';
import './confirmorder.css'

function ConfirmOrder({ order }) {

  if (!order || order.length === 0) {
    return <div>No hay órdenes para confirmar</div>;
  }

  const [goToPay, setGoToPay] = useState(false)
  const handlePagar = () => {
    setGoToPay(true)
  }
  if (goToPay) {
    return <Navigate to={'/busqueda/pagar/medio-de-pago'} />
  }


  return (
    <>

      <div className="ConfirmContent">
        <div className="infoStoreContent">
          <div className="storeInfo">
            <div className="storeLogoConfirmar" style={{ fontSize: '10px', fontWeight: '300', lineHeight: '16px' }}><img src={order[0].storeId.storeImageUrl} alt="logo store"></img></div>
            <div className="storeDataConfirmar">
              <p style={{ fontSize: '12px', fontWeight: '400', lineHeight: '16px' }}>{order[0].storeId.name}</p>
              <p style={{ fontSize: '10px', fontWeight: '300', lineHeight: '16px' }}>{order[0].storeId.address}</p>
            </div>
          </div>
          <div className="iconContent"><FontAwesomeIcon icon={faShop} style={{ width: '100%', height: '100%', color: '#D57FFF' }} /></div>
        </div>

        <div className="orderContent">

          <section className="ListTitle">
            <div><FontAwesomeIcon icon={faAngleDown} /></div>
            <p style={{ fontWeight: '700', fontSize: '16px', lineHeight: '16px' }}>Lista del pedido</p>
            <div><FontAwesomeIcon icon={faAngleDown} /></div>
          </section>
          <section className="articlesContent">
            {order.map((item, index) =>
              <div className="itemContent" key={index}>
                <div className="mealData">
                  <div className="mealDataImage"><img src={item.productImageUrl} alt="food image"></img></div>
                  <div className="mealDataFood">
                    <div className="mealDataFoodStore">
                      <p style={{ fontSize: '13px', fontWeight: '500', lineHeight: '16px' }}>{item.name}</p>
                      <p style={{ fontSize: '10px', fontWeight: '500', lineHeight: '16px', color: '#3F9BFF' }}>{item.categoryId.name}</p>
                    </div>
                    <div><FontAwesomeIcon icon={faTrashCan} style={{ color: '#979797' }} /></div>
                  </div>
                </div>
                <div className="count">
                  <p className="btn-confirmar">Cantidad: {item.productCant}</p>
                  <p className="btn-confirmar">Total: $ {item.productTotal.toLocaleString()} </p>
                </div>
              </div>
            )}

          </section>
          <section className="totalCount">
            <div className="totalItem ">
              <div className="itemIcon">
                <FontAwesomeIcon icon={faBox} />
                <p>Pedido</p>
              </div>
              <p><span style={{ color: '#3F9BFF' }}>$</span>15.000</p>
            </div>
            <div className="totalItem">
              <div className="itemIcon">
                <FontAwesomeIcon icon={faMotorcycle} />
                <p>Envío</p>
              </div>
              <p><span style={{ color: '#3F9BFF' }}>$</span>2.000</p>
            </div>
            <div className="totalItem ">
              <p>Total</p>
              <p><span style={{ color: '#3F9BFF' }}>$</span>17.000</p>
            </div>
          </section>
        </div>

        <button className="btn-pagar" onClick={handlePagar}>Ir a pagar</button>
      </div>




    </>
  )
}

export default ConfirmOrder