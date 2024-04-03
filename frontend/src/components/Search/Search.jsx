import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  return (
    <>
      <search>
        <button type="button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input type="search" name="search" placeholder='Search'/>
      </search>
      <label >
        <p>Envio a domicilio</p>
        <input type="checkbox" name="shipment" />
        <p>Retiro Local</p>
      </label>
    </>
  )
}