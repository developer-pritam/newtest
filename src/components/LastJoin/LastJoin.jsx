import React from 'react'
import style from './LastJoin.module.css'
const LastJoin = (theme1) => {
    const theme = theme1.theme.theme
    return (
        <div className={style.container} >
            <h1 > More than a free link shortener</h1>
            <button style={{
                backgroundColor: theme.highlight,
                color: theme.text, borderColor: theme.text
            }} className={style.button} >Join Now</button>
        </div>
    )
}

export default LastJoin
