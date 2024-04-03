import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBell, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import HamburgerBtn from '../Buttons/HamburgerBtn/HamburgerBtn';

const pages = [
  {
    name: 'Notificaciones',
    path: '/notificaciones',
    icon: faBell
  },
  {
    name: 'Carrito',
    path: '/carrito',
    icon:faCartShopping
  },
  
];
function Navbar() {
  return (
    <>
      <header>
        <HamburgerBtn />
        <nav >
          <ul style={{width:'90%', display:'flex', flexDirection:'row', justifyContent:'flex-end', columnGap:'20px', marginRight:'50px'}}>
            {pages.map((page) => (
              <li key={page.path} style={{listStyleType:'none' }}>
                <LinkRouter to={page.path}><FontAwesomeIcon icon={page.icon} /></LinkRouter>
              </li>))}
          </ul>

        </nav>




      </header>
    </>
  )
}

export default Navbar
