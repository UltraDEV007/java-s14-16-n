
import { Link as LinkRouter } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBell, faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import HamburgerBtn from '../share/Buttons/HamburgerBtn/HamburgerBtn';


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
          <FontAwesomeIcon icon={faLocationDot}/>
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
        
      </header>
     
    </>
  )
}

export default Navbar
