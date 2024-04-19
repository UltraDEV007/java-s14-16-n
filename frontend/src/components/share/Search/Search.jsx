import { useSearchParams, useNavigate } from 'react-router-dom'
import './Search.css'
import Popup from '../Popup/Popup'
import Radio from '../Buttons/Radio/Radio'

const buttons = ['pizza', 'hamburguesa', 'postres', 'guarnición']

export default function Search({
  param = 'q',
  setRoute = 'busqueda',
}) {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()

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
      <Popup name={'filter'} param='s'>
        <menu className='menu-filter'>
          <h4>Filtros de búsqueda</h4>
          {buttons.map(b => <Radio >{b}</Radio>)}
          <button type='button'>Confirmar</button>
        </menu>
      </Popup>
    </>
  )
}