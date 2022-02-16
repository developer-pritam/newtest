import React from 'react'
import style from './JoinSection.module.css'
const JoinSection = (theme1) => {
    const theme = theme1.theme.theme

    return (
        <div className={style.container}>
            <h2>Want to track clicks on your shortened links?</h2>
            <button style={{
                backgroundColor: theme.highlight,
                color: theme.text, borderColor: theme.text
            }} className={style.button}>Get Started For Free</button>
        </div>
    )
}

export default JoinSection
