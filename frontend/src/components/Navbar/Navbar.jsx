import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import HamburgerBtn from '../share/Buttons/HamburgerBtn/HamburgerBtn';
// import ToggleButton from '../ToggleButton/ToggleButton';
// import Search from "../share/Search/Search";
import FoodQuery from '../FoodQuery/FoodQuery';

const pages = [{
  name: 'Carrito',
  path: '/carrito',
  icon: faCartShopping
}, {
  name: 'Notificaciones',
  path: '/notificaciones',
  icon: faBell
},
];

function Navbar() {
  return (
    <>
      <header>
        <HamburgerBtn />
        <address>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>Mi ubicación</p>
        </address>
        <nav >
          <ul>
            {pages.map((page) => (
              <li key={page.path} >
                <LinkRouter to={page.path}><FontAwesomeIcon icon={page.icon} /></LinkRouter>
              </li>))}
          </ul>
        </nav>
        <FoodQuery />
        {/* <Search />
        <ToggleButton options={['Retiro en el local','Envío a Domicilio']} /> */}
      </header>
    </>
  )
}

export default Navbar
