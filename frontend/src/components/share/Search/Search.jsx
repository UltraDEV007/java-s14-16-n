import { useSearchParams, useNavigate } from 'react-router-dom'
import './Search.css'

export default function Search({
  param = 'q',
  setPath = '/inicio/',
}) {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()

  return (
    <>
      <search className='search-bar'>
        <button className='magnifier' type="submit" onClick={() => navigate(setPath + params.get(param))}/>
        <input 
          type="search" 
          name="search" 
          placeholder='Buscar' 
          value={params.get(param) ?? ''} 
          onChange={(e, value = e.target.value) => setParams(prev => (value ? prev.set(param, value) : prev.delete(param), prev), {replace: true})}
        />
        <button className='filter' type='button' />
      </search >
    </>
  )
}