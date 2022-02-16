import React from 'react'
import style from './ShortLinkCard.module.css'
const ShortLinkCard = (theme1) => {
    const theme = theme1.theme.theme
    return (
        <div className={style.container} >
            <div className={style.input} >
                <form>
                    <input style={{

                        color: theme.text, borderColor: theme.text
                    }} className={style.urlInput} autoComplete="off" name="url" type="url" placeholder="Shorten your link" />
                    <input style={{
                        backgroundColor: theme.highlight,
                        color: theme.text, borderColor: theme.text
                    }} className={style.submit} type="submit" value="Short Link" />
                </form>
            </div>
        </div>
    )
}

export default ShortLinkCard
