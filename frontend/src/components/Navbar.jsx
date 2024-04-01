import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
const pages = [
  {
    name: 'Inicio',
    path: '/inicio'
  },
  {
    name: 'Perfil',
    path: '/perfil'
  },
  {
    name: 'Beneficios',
    path: '/beneficios'
  },
  {
    name: 'Pedidos',
    path: '/pedidos'
  },
  {
    name: 'Pagos',
    path: '/pagos'
  }
];
function Navbar() {
  return (
    <>
      <div>
        <nav>
          <ul>
            {pages.map((page) => (
              <li key={page.path}>
                <LinkRouter to={page.path}>{page.name}</LinkRouter>
              </li>))}
          </ul>

        </nav>




      </div>
    </>
  )
}

export default Navbar
