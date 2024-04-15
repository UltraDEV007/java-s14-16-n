import React from "react";
import Search from "../share/Search/Search";
import Form from "../share/Form/Form";
import './FoodQuery.css'
import '../share/ToggleButton/ToggleButton'
import ToggleButton from "../share/ToggleButton/ToggleButton";
import { useLocation, useParams } from 'react-router-dom';

export default function FoodQuery() {
  const { pathname } = useLocation();
  const { mealId } = useParams();

  const showSearch = [
    'inicio', 
    'busqueda', 
    `busqueda/${mealId}`,
  ].some(path => pathname === `/${path}`);
  const showToggleButton = showSearch || '/busqueda/pagar/producto-elegido' === pathname;

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