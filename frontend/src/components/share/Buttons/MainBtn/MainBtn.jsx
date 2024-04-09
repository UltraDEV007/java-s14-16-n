import './MainBtn.css'

export default function MainBtn({
  children,
  type = 'button',
  className,
  disabled,
  onClick,
}) {
  return <button {...{
    className: `main-btn${className ? ' ' + className : ''}`,
    type, 
    disabled,
    onClick,
  }} >{children}</button>
}