import { useState } from "react"

function assert(func) {
  return func && typeof func === 'function'
}

export default function Form({
  name,
  className,
  children,
  onSubmit,
  validate,
  onChange,
}) {
  const [disabled, setDisabled] = useState(validate);

  function submit(e) {
    e.preventDefault();
    
    if (assert(onSubmit)) {
      const formData = Object.fromEntries(new FormData(e.target))
      
      onsubmit({
        e, 
        disable: () => setDisabled(validate),
        formData
      })
    }
  }

  function validate(e) {
    if (assert(onChange)) {
      const 
        form = e.currentTarget.elements,
        isValid = Array
          .from(form)
          .every(input => input.validity.valid)

      setDisabled(!isValid)

      onChange({
        e,
        disabled,
      })
    }
  }

  return (
    <>
      <form {...{name, className}} 
        noValidate onSubmit={submit} 
        onChange={validate} 
      >
        {children}
      </form>
    </>
  )
}