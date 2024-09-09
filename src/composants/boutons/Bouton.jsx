import React from 'react'
import { NavLink } from 'react-router-dom'

const Bouton = ({text,style,link,onclick} ) => {
  return (
    //<a  className={style}>{text}</a>
    <NavLink className={style} to={link} onClick={onclick} >{text}</NavLink>
  )
}

export default Bouton
