import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Footer.module.css'
const Footer = (theme1) => {

    const theme = theme1.theme.theme;
    return (
        <div className={style.footer} >
            © 2021
            <b>
                <NavLink style={{ color: theme.text }} to="/" > eco-link.in </NavLink>
            </b>
            | Made by
            <b>
                <a style={{ color: theme.text }} href="https://developerpritam.in" > Pritam Kumar </a>
            </b>
        </div >
    )
}

export default Footer
