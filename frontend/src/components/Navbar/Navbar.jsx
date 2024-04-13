import React from 'react'
import { Link as LinkRouter, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import HamburgerBtn from '../share/Buttons/HamburgerBtn/HamburgerBtn';
import FoodQuery from '../FoodQuery/FoodQuery';
import BackArrow from '../BackArrow/BackArrow'



function Navbar() {
  const location = useLocation();

  let paginaActual;

  switch (location.pathname) {
    case '/inicio':
      paginaActual = 'Av. Rivadavia 2360';
      break;
    case '/perfil':
      paginaActual = 'Perfil';
      break;
    case '/beneficios':
      paginaActual = 'Descuentos';
      break;
    case '/pedidos':
      paginaActual = 'Mi Pedido';
      break;
    case '/busqueda/mealId':
      paginaActual = 'Resultados de Búsqueda';
      break;
    case '/busqueda/pagar/producto-elegido':
      paginaActual = 'Tu pedido';
      break;
    case '/busqueda/pagar/confirmar':
      paginaActual = 'Confirmar Pedido';
      break;
    case '/busqueda/pagar/medio-de-pago':
      paginaActual = 'Método de Pago';
      break;
      case '/busqueda/pagar/monto-de-efectivo':
      paginaActual = 'Método de Pago';
      break;
    default:
      paginaActual = 'Av. Rivadavia 2360';
  }

  const hideBackArrow = location.pathname === '/inicio';
  const isMinHeader = location.pathname.startsWith('/busqueda/pagar') && !location.pathname.includes('/busqueda/pagar/producto-elegido');;
  const isMediumHeader = location.pathname === '/busqueda/pagar/producto-elegido' ;
  const showHeader = location.pathname === '/inicio' || location.pathname === '/busqueda/mealId' || location.pathname === '/busqueda/pagar/producto-elegido' 
  || location.pathname === '/busqueda/pagar/confirmar' || location.pathname === '/busqueda/pagar/medio-de-pago' || location.pathname === '/busqueda/pagar/monto-de-efectivo'

  return (
    <>
      {showHeader && <header className={`header ${isMinHeader ? 'headerMin' : ''} ${isMediumHeader ? 'headerMedium' : ''}`}>
        <div className='headerH'>
           {!hideBackArrow && <BackArrow />}
          <address>
            <FontAwesomeIcon icon={faLocationDot} style={{ color: '#D57FFF', fontSize: '21px' }} />
            <p style={{ fontSize: '16px', lineHeight: '21px', fontWeight: '500' }}>{paginaActual}</p>
          </address>
          <div className='headerLinks'>
            <div className='hamburger-btn-container'>
            <LinkRouter to=''><FontAwesomeIcon icon={faBell} style={{ color: '#D57FFF', fontSize: '21px', width: '32px' }} /></LinkRouter>
            </div>
            <HamburgerBtn />
          </div>
        </div>
        <FoodQuery />
      </header>}
    </>
  )
}

export default Navbar
