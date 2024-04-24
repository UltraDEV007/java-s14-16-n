import { Link } from "react-router-dom";

export default function Indexed({
  item,
  hr,
  ...props
}) {
  return <>
    <Link to={'busqueda'} state={{name: item.name}} {...props}>{item.name}</Link>
    {hr && <hr />}
  </>
  
}