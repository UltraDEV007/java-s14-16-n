import './Search.css'

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