import { useState } from "react"

const disabledAttr = 'disabled'

function assert(func) {
  return Boolean(func) && typeof func === 'function'
}

export default function Form({
  name,
  className,
  children,
  onSubmit,
  validate,
  onChange,
  btnRef,
}) {
  const [disabled, setDisabled] = useState(validate);

  function submit(e) {
    e.preventDefault();
    
    if (assert(onSubmit)) {
      const formData = Object.fromEntries(new FormData(e.target))
      
      onSubmit({
        e, 
        disable: () => setDisabled(validate),
        formData
      })
    }
  }

  function validate(e) {
    if (Boolean(btnRef)) {
      const isNotValid = !Array
        .from(e.currentTarget.elements)
        .every(input => input.validity.valid)
      
      setDisabled(isNotValid)

      if (isNotValid) btnRef.current.setAttribute(disabledAttr, true)
      else btnRef.current.removeAttribute(disabledAttr)

    } else return
    
    if (assert(onChange)) {
      onChange({
        e,
        disabled,
      })
    }
  }

  return (
    <>
      <form {...{name, className}} 
        noValidate 
        onSubmit={submit} 
        onChange={validate} 
      >
        {children}
      </form>
    </>
  )
}