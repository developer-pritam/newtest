import React from 'react'
import style from './LinkCopy.module.css'
const LinkCopy = (theme1) => {
    const theme = theme1.theme.theme

    const copy = (e) => {
        console.log(e.target.innerHTML)
        e.target.innerHTML = "Copied!"
        e.target.style.backgroundColor = theme.highlight
        setInterval(() => {
            e.target.innerHTML = "Copy"
            e.target.style.backgroundColor = "#eee"
        }, 1500);
    }
    return (
        <div className={style.container}>
            <h4 className={style.oldLink}>https://ahhdvsfacgeufghcuiegcuiws.com</h4>
            <h3 style={{
                backgroundColor: theme.highlight
            }} className={style.shortLink}  >https://eco-l.in/gyafca</h3>
            <button onClick={copy} style={{

                color: theme.text, borderColor: theme.text
            }} className={style.button} >Copy</button>

        </div>
    )
}

export default LinkCopy
