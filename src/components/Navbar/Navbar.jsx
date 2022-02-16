import React from 'react'
import { Fade } from 'react-reveal'
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"
import logo from '../../images/logo-new.png'

const Navbar = (theme1) => {
    const theme = theme1.theme.theme
    // console.log(theme)
    const onMouseEnter = (event, color) => {
        const el = event.target;
        el.style.backgroundColor = color;
    };

    const onMouseOut = (event) => {
        const el = event.target;
        el.style.backgroundColor = "transparent";
    };


    return (

        <Fade top duration={1000} distance="20px">

            <div>
                <header className="header">
                    <NavLink to="/" tag={Link} className="logo">
                        <img className="logo" src={logo} alt="Logo" />
                    </NavLink>

                    <input className="menu-btn" type="checkbox" id="menu-btn" />

                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu" style={{ backgroundColor: theme.body }}>
                        <li>
                            <NavLink
                                to="/"
                                tag={Link}
                                activeStyle={{ fontWeight: "bold" }}
                                style={{ color: theme.text }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/url"
                                tag={Link}
                                activeStyle={{ fontWeight: "bold" }}
                                style={{ color: theme.text }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                URLs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/features"
                                tag={Link}
                                activeStyle={{ fontWeight: "bold" }}
                                style={{ color: theme.text }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Features
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/api"
                                tag={Link}
                                activeStyle={{ fontWeight: "bold" }}
                                style={{ color: theme.text }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                API
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                                tag={Link}
                                activeStyle={{ fontWeight: "bold" }}
                                style={{ color: theme.text }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/join"
                                tag={Link}
                                activeStyle={{ fontWeight: "bold" }}
                                style={{ color: theme.text, backgroundColor: theme.highlight }}

                            >
                                Sign up
                            </NavLink>
                        </li>


                    </ul>
                </header>
            </div>
        </Fade >

    )
}

export default Navbar
