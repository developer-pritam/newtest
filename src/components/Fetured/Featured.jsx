import React from 'react'
import style from './Featured.module.css'
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import PollIcon from '@material-ui/icons/Poll';
import StyleIcon from '@material-ui/icons/Style';


const Featured = (theme1) => {
    const theme = theme1.theme.theme

    return (<div>
        <h1 className={style.heading} > Link analytics, branded urls, URL shortener</h1>
        <p className={style.subHeading} > Don't let the links limit you. Make your links support your brand. The new standard of shortening links. A new standard for link analytics. Discover unique redirects analytics - work with your team together building your brand engagment. Manage your links like a pro. </p>
        <div className={style.container}>


            <div className={style.item} style={{ borderColor: theme.text }} >
                <InsertLinkIcon className={style.icon} style={{ backgroundColor: theme.highlight, fontSize: '50px' }} />
                <h3>URL Shortner</h3>
                <p className={style.detail}> Free custom URL Shortener with many features that gives you better quality for links shortening. Shortened URLs will never expire. We do not display ads during direct redirecting to the original url.</p>
            </div>

            <div className={style.item} style={{ borderColor: theme.text }} >
                <PollIcon className={style.icon} style={{ backgroundColor: theme.highlight, fontSize: '50px' }} />
                <h3>URL Shortner</h3>
                <p className={style.detail}> Free custom URL Shortener with many features that gives you better quality for links shortening. Shortened URLs will never expire. We do not display ads during direct redirecting to the original url.</p>
            </div>

            <div className={style.item} style={{ borderColor: theme.text }} >
                <StyleIcon className={style.icon} style={{ backgroundColor: theme.highlight, fontSize: '50px' }} />
                <h3>URL Shortner</h3>
                <p className={style.detail}> Free custom URL Shortener with many features that gives you better quality for links shortening. Shortened URLs will never expire. We do not display ads during direct redirecting to the original url.</p>
            </div>

        </div>

    </div>
    )

}


export default Featured
