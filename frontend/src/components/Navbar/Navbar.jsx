import React from 'react'
import { Link as LinkRouter, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import HamburgerBtn from '../share/Buttons/HamburgerBtn/HamburgerBtn';
// import ToggleButton from '../ToggleButton/ToggleButton';
// import Search from "../share/Search/Search";
import FoodQuery from '../FoodQuery/FoodQuery';
import BackArrow from '../BackArrow/BackArrow'



function Navbar() {
  const location = useLocation();

  let paginaActual;

  switch (location.pathname) {
    case '/':
      paginaActual = 'Mi ubicación';
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
    default:
      paginaActual = 'Mi ubicación';
  }
  return (
    <>
      <header>
        <div className='headerH'>
          <BackArrow />
        {/* <FontAwesomeIcon className="pointer goBack" icon={faChevronLeft} /> */}
          <address>
            <FontAwesomeIcon icon={faLocationDot} style={{color: '#D57FFF', fontSize:'21px'}}/>
            <p style={{fontSize:'16px', lineHeight:'21px', fontWeight:'500'}}>{paginaActual}</p>
          </address>
          <div className='headerLinks'>
            <LinkRouter to=''><FontAwesomeIcon icon={faBell} style={{color: '#D57FFF', fontSize:'21px', width:'32px'}}/></LinkRouter>
            {/* <FontAwesomeIcon icon={faBars} /> */}
            <HamburgerBtn />
          </div>

        </div>
        <FoodQuery />
      </header>
    </>
  )
}

export default Navbar
