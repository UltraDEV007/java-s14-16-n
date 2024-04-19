import './Radio.css'

export default function Radio({
  children,
  name = 'filter',
  ...props
}) {
  return (
    <label className='label-button'>{children}
      <input type='radio' name={name} value={children} {...props} />
    </label>
  )
}