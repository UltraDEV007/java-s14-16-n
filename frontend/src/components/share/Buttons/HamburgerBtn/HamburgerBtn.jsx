import React from 'react'
import './HamburgerBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function HamburgerBtn() {
  return (
    <button className="hamburger-btn" >
      <FontAwesomeIcon icon={faBars} style={{fontSize:'21px'}}/>
      {/* <svg viewBox='0 0 100 100'>
        <rect />
        <rect />
        <rect />
      </svg> */}
    </button>
  )
}