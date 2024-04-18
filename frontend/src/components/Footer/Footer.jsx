import React from 'react'
import { Link as LinkRouter, useLocation, useParams, useSearchParams } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faPercent, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const build = 'construccion';
const pages = [
  {
    name: 'Inicio',
    paths: ['/inicio', '/busqueda/mealId'],
    icon: faHouse
  },

  {
    name: "Descuentos",
    paths: [build, "/beneficios"],
    icon: faPercent,
  },
  {
    name: 'Mi Pedido',
    paths: [
      '/busqueda/pagar/producto-elegido',
      '/busqueda/pagar/detalles-de-entrega'
    ],
    icon: faCartShopping
  },
  {
    name: "Cuenta",
    paths: [build, "/perfil"],
    icon: faUser,
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
                  <FontAwesomeIcon
                    icon={page.icon}
                    style={{ fontSize: "20px" }}
                  />
                  <p style={{ fontSize: "14px" }}>{page.name}</p>
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
