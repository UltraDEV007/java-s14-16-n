import './MainBtn.css'

export default function MainBtn({
  children,
  type,
  className,
  disabled,
}) {
  return <button {...{
    className: `main-btn${className ? ' ' + className : ''}`,
    type, 
    disabled,
  }} >{children}</button>
}