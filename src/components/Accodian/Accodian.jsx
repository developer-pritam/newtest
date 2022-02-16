import style from './Accodian.module.css'
import AddIcon from '@material-ui/icons/Add';

const Accodian = () => {


    const data = {
        ID1: {
            title: "What is a URL Shortener?",
            content: `A URL shortener, also known as a link shortener, seems like a simple tool, but it is a service that can have a dramatic impact on your marketing efforts.
    
            Link shorteners work by transforming any long URL into a shorter, more readable link. When a user clicks the shortened version, they’re automatically forwarded to the destination URL.
            
            Think of a short URL as a more descriptive and memorable nickname for your long webpage address. You can, for example, use a short URL like bit.ly/CelebrateBitly so people will have a good idea about where your link will lead before they click it.
            
            If you’re contributing content to the online world, you need a URL shortener.
            
            Make your URLs stand out with our easy to use free link shortener above.`
        },
        ID2: {
            title: "Benefits of a Short URL",
            content: `A custom URL shortener, sometimes referred to as a branded URL shortener, lets you brand your links.
    
            For example, instead of bit.ly/xyz, you could use a custom short URL like yourbrnd.co/xyz.
            
            There are several benefits of branding your short links. Branded links build trust between your audience and your business, drive more clicks, give your audience a preview of where they are being taken and increase brand awareness.
            
            A link shortening service that includes custom short URLs is vital to improving audience engagement with your communications. A short URL is good, but a custom URL works every time.`,
        },
        ID3: {
            title: "Features of Bitly’s Link Management Platform",
            content: `If you’re looking to shorten just a link or two, our free URL shortener service will work for you.
    
            But if you’re looking to share unique content in a way that feels personal to each user, you will need a link management platform. With our platform, you can brand your links with a custom domain, build QR codes, shorten links in bulk, redirect links, build campaigns and leverage many more features. If you need to create links at higher volumes, you can also take advantage of our powerful Bitly API.
            
            `
        },
        ID4: {
            title: "Why Choose Bitly",
            content: `Whether you’re sharing one link or millions, our platform was built to help you make every point of connection between your content and your audience ignite action.
    
            That’s why the most recognized brands in the world love our platform.`
        }
    }


    return (
        <>
            <div className={style.container}>

                <div className={style.container}>
                    <div className={style.accordion}>
                        <input type="checkbox" name="radio" id="section-1" className={` ${style.section1}  ${style.input}`} />

                        <label htmlFor="section-1" >

                            <h4 className={style.toggler} > {data.ID1.title}   <AddIcon className={`${style.icon1} ${style.icon}`} /> </h4>
                        </label>
                        <p className={`${style.detail} ${style.section1Detail}`} > {data.ID1.content}

                        </p>
                    </div>


                </div>


                <div className={style.container}>
                    <div className={style.accordion}>
                        <input type="checkbox" name="radio" id="section-2" className={` ${style.section2}  ${style.input}`} />

                        <label htmlFor="section-2" >

                            <h4 className={style.toggler} > {data.ID2.title}   <AddIcon className={`${style.icon2} ${style.icon}`} /> </h4>
                        </label>
                        <p className={`${style.detail} ${style.section2Detail}`} > {data.ID2.content}

                        </p>
                    </div>


                </div>



                <div className={style.container}>
                    <div className={style.accordion}>
                        <input type="checkbox" name="radio" id="section-3" className={` ${style.section3}  ${style.input}`} />

                        <label htmlFor="section-3" >

                            <h4 className={style.toggler} > {data.ID3.title}   <AddIcon className={`${style.icon3} ${style.icon}`} /> </h4>
                        </label>
                        <p className={`${style.detail} ${style.section3Detail}`} > {data.ID3.content}

                        </p>
                    </div>


                </div>


                <div className={style.container}>
                    <div className={style.accordion}>
                        <input type="checkbox" name="radio" id="section-4" className={` ${style.section4}  ${style.input}`} />

                        <label htmlFor="section-4" >

                            <h4 className={style.toggler} > {data.ID4.title}   <AddIcon className={`${style.icon4} ${style.icon}`} /> </h4>
                        </label>
                        <p className={`${style.detail} ${style.section4Detail}`} > {data.ID4.content}

                        </p>
                    </div>


                </div>


            </div>
        </>
    )


}

export default Accodian


