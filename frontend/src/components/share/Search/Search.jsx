import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  return (
    <>
      <search className='search-bar'>
        <button className='magnifier' type="button" />
        <input type="search" name="search" placeholder='Buscar'/>
        <button className='filter' type='button' />
      </search >
    </>
  )
}