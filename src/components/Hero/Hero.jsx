import React from 'react'
import style from './Hero.module.css'
import heroImg from '../../images/heroo-img.png'
import { Fade } from 'react-reveal'
const Hero = (theme1) => {
    const theme = theme1.theme.theme
    const onMouseOut = (event, color) => {
        const el = event.target;
        el.style.backgroundColor = color;
        el.style.borderColor = "transparent"
        el.style.scale = 1

    };
    const onMouseEnter = (event) => {
        const el = event.target;
        el.style.backgroundColor = "transparent";
        el.style.borderColor = theme.text
        el.style.scale = 1.1

    };
    return (

        <div className={style.container} >
            <Fade left duration={1500} distance="100px">
                <div className={style.heroText}>
                    <h1>Short Link, Wider Reach</h1>
                    <h4>URL shortner with great Eco-System to manage you links from any device.</h4>
                    <button style={{
                        backgroundColor: theme.highlight,
                        color: theme.text,
                        borderColor: "transparent"
                    }}
                        onMouseEnter={(event) => onMouseEnter(event)}
                        onMouseOut={(event) => onMouseOut(event, theme.highlight)}
                    >Get Started</button>
                </div>
            </Fade>
            <Fade right duration={1500} distance="100px">
                <div className={style.heroImg}>
                    <img src={heroImg} alt="Hero" /></div> </Fade>
        </div >

    )
}

export default Hero;
