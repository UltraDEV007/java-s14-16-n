import Search from "../share/Search/Search";
import Form from "../share/Form/Form";
import './FoodQuery.css'
import '../share/ToggleButton/ToggleButton'
import ToggleButton from "../share/ToggleButton/ToggleButton";

export default function FoodQuery() {
  return (
    <>
      <Form className={'food-query'}>
        <Search />
        <ToggleButton options={['Delivery','Retiro en Local']}/>
      </Form>
    </>
  )
}