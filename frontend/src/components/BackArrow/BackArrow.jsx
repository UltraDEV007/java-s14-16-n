import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './backArrow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function BackArrow() {
    const location = useLocation();
    const previousPage = () => {
        switch (location.pathname) {
            case '/inicio':
                return '/';
            case '/busqueda':
                return '/inicio';
            case '/busqueda/pagar/producto-elegido':
                return '/busqueda/mealId';
            case '/busqueda/pagar/confirmar':
                return '/busqueda/pagar/producto-elegido';
            case '/busqueda/pagar/medio-de-pago':
                return '/busqueda/pagar/confirmar';
            default:
                return '/';
        }
    };

    return (
        <>
            <Link
                to={previousPage()}
            >
                <FontAwesomeIcon className="pointer goBack" icon={faChevronLeft} />
            </Link>
        </>
    )
}
export default BackArrow