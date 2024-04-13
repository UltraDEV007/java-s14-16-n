import React from "react";

import Search from "../share/Search/Search";
import Form from "../share/Form/Form";
import './FoodQuery.css'
import '../share/ToggleButton/ToggleButton'
import ToggleButton from "../share/ToggleButton/ToggleButton";
import { useLocation } from 'react-router-dom';

export default function FoodQuery() {
  const location = useLocation();

  const showSearch = location.pathname === '/inicio' || location.pathname === '/busqueda/mealId';
  const showToggleButton = location.pathname === '/inicio' || location.pathname === '/busqueda/pagar/producto-elegido' || location.pathname === '/busqueda/mealId';
  return (
    <>
      <Form className={'food-query'}>
        <div style={{width:'100%', visibility: showSearch ? 'visible' : 'hidden' }}>
        {showSearch && <Search />}
        </div>
        <div style={{width:'100%', visibility: showToggleButton ? 'visible' : 'hidden' }}>
        {showToggleButton && <ToggleButton options={['Delivery','Retiro en Local']}/>}
        </div>
       
      </Form>
    </>
  )
}