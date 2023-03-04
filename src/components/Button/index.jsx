import React from 'react'
import { Link ,useLocation} from 'react-router-dom'

import './Button.css'
const Button = (props) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const location = useLocation()

    
  return (

      <button onClick={props.onClick}  className='ButtonContainer'
      style={{
          color: props.color,
          border: props.border,
          backgroundColor: props.backgroundColor,
          
      }}
      >
      {props.details && <Link onClick={handleScrollToTop} style={
        {
          color: props.color,
          textDecoration: 'none',
        }
      } to={props.link}>{props.text}</Link> || props.text}
      </button>

  )
}

export default Button
