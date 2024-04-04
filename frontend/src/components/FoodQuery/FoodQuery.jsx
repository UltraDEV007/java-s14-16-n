import Search from "../Search/Search";
import Form from "../share/Form/Form";
import './FoodQuery.css'

export default function FoodQuery() {
  return (
    <>
      <Form className={'food-query'}>
        <Search />
        <label >
          <p>Envio a domicilio</p>
          <input type="checkbox" name="shipment" />
          <p>Retiro Local</p>
        </label>
      </Form>
    </>
  )
}