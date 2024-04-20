import React from 'react'
import { Link as LinkRouter, useLocation, useParams, useSearchParams } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faPercent, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import HouseIcon from '../../assets/Nav-Icon.svg'
import DiscountIcon from '../../assets/Discount-Icon.svg'
import ShopCar from '../../assets/Shop-Cart-Icon.svg'
import User from '../../assets/User-Icon.svg'

const build = 'construccion';
const pages = [
  {
    name: 'Inicio',
    paths: ['/inicio', '/busqueda/mealId'],
    icon: HouseIcon,
  },

  {
    name: "Descuentos",
    paths: [build, "/beneficios"],
    icon: DiscountIcon,
  },
  {
    name: 'Mi Pedido',
    paths: [
      '/busqueda/pagar/producto-elegido',
      '/busqueda/pagar/detalles-de-entrega'
    ],
    icon: ShopCar
  },
  {
    name: "Cuenta",
    paths: [build, "/perfil"],
    icon: User,
  },
];

function Footer() {
  const location = useLocation();
  const { mealId } = useParams();
  const [params] = useSearchParams();

  const showFooter = [
    'inicio', 
    'construccion',
    'busqueda',
    `busqueda/${mealId}`,
    'busqueda/pagar/producto-elegido',
    'busqueda/pagar/detalles-de-entrega',
  ].some(path => `/${path}` === location.pathname) && !params.has('popup')

  return (
    <>
      {showFooter && 
      <footer className="footer">
        <nav style={{ width: "100%", height:'100%'}}>
          <ul
            style={{
              width: "100%",
              height:'100%',
              display: "flex",
              flexDirection: "row",
              alignItems:'center',
              justifyContent: "space-evenly",
            }}
          >
            {pages.map((page) => (
              <li
                key={page.name}
                style={{ listStyleType: "none"}}
                className={isActive(page.paths, location.pathname) ? "activeOn" : ""}
              >
                <LinkRouter to={page.paths[0]}
                 
                  >
                    <img
                    src={page.icon}
                    alt={page.name}
                    style={{ width: "18px" }}
                    ></img>
                  <p style={{ fontSize: "12px" }}>{page.name}</p>
                </LinkRouter>
              </li>
            ))}
          </ul>
        </nav>
      </footer>}
    </>
  );
}

function isActive(pagePaths, currentPath) {
  return pagePaths.includes(currentPath);
}
export default Footer;
