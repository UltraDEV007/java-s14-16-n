import { useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import './Popup.css'

export default function Popup({
  name, 
  children, 
  fn, 
  param = 'popup',
  ...props
}) {
  const dialog = useRef(<></>)
  const [params, setParams] = useSearchParams()
  const paramName = params.get(param)

  function close() {
    setParams(prev => (prev.delete(param), prev))
  }
  
  useEffect(() => {
    if (paramName === name) {
      function listen(e) {
        if (e.key === 'Escape' || e.target.nodeName === 'DIALOG') {
          close()
        }
      }

      dialog.current.showModal()
      document.addEventListener('keydown', listen)
      document.addEventListener('click', listen)

      return () => {
        document.removeEventListener('click', listen)
        document.removeEventListener('keydown', listen)
        dialog.current.close()
      }
    }
  })

  if (fn) fn.current = close

  return <dialog ref={dialog} {...props}>
    {children}
  </dialog>
}