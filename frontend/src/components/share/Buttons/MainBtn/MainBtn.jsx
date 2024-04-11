import './MainBtn.css'

export default function MainBtn({
  children,
  type = 'button',
  className,
  ...props
}) {
  return <button {...{
    className: `main-btn${className ? ' ' + className : ''}`,
    type, 
    ...props
  }} >{children}</button>
}