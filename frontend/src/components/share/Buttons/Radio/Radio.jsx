import './Radio.css'

export default function Radio({
  children,
  name = 'categoryId',
  value = children,
  ...props
}) {
  return (
    <label className='label-button'>{children}
      <input type='radio' name={name} value={value} {...props} />
    </label>
  )
}