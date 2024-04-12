import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './HamburgerBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHandPointLeft } from '@fortawesome/free-solid-svg-icons'

export default function HamburgerBtn() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const pages = [
    {
      name: 'Establecimientos',
      path: '/a',
    },

    {
      name: "Ayuda",
      path: "/b",

    },
    {
      name: 'Información',
      path: '/c',
    }
  ]

  return (
    <div className='hamburger-btn-container'>
      <button className="hamburger-btn" onClick={handleOpen}>
        <FontAwesomeIcon icon={faBars} style={{ fontSize: '21px' }} />
        {/* <svg viewBox='0 0 100 100'>
        <rect />
        <rect />
        <rect />
      </svg> */}
      </button>
      {menuOpen && (
        <nav className="menu-options">
          <ul
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
            {pages.map((page) => (
              <li
                key={page.path}
                style={{ listStyleType: "none" }}
              >
                <Link to=''>
                  <p style={{ fontSize: '16px', lineHeight: '21px', fontWeight: '500', color:'black'}}>{page.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>

  )
}