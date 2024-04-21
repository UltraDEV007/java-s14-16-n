import { useSearchParams, useNavigate } from 'react-router-dom'
import './Search.css'
import Popup from '../Popup/Popup'
import Radio from '../Buttons/Radio/Radio'
import { useRef } from 'react'

const buttons = ['pizza', 'hamburguesa', 'postres', 'guarnición']

export default function Search({
  param = 'q',
  setRoute = 'busqueda',
}) {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()
  const closeFn = useRef(null)

  return (
    <>
      <search className='search-bar'>
        <button className='magnifier' type="submit" onClick={() => navigate(setRoute, { state: params.get(param) })}/>
        <input 
          type="search" 
          name="search" 
          placeholder='Buscar' 
          value={params.get(param) ?? ''} 
          onChange={(e, value = e.target.value) => setParams(prev => (value ? prev.set(param, value) : prev.delete(param), prev), {replace: true})}
        />
        <button className='filter' type='button' onClick={() => setParams(prev => (prev.set('s', 'filter'), prev))}/>
      </search >
      <Popup name={'filter'} param='s' fn={closeFn}>
        <menu className='menu-filter'>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            onClick={(e) => {
              e.currentTarget
                .closest('menu')
                .querySelectorAll('input')
                .forEach(i => i.checked = false)
              closeFn.current()
            }
          }>
            <rect x="4.24243" y="3.53554" width="11" height="1" transform="rotate(45 4.24243 3.53554)" fill="#979797"/>
            <rect x="12.0208" y="4.24265" width="11" height="1" transform="rotate(135 12.0208 4.24265)" fill="#979797"/>
          </svg>
          <h4>Filtros de búsqueda</h4>
          {buttons.map(b => <Radio >{b}</Radio>)}
          <button type='button' onClick={() => closeFn.current()}>Confirmar</button>
        </menu>
      </Popup>
    </>
  )
}