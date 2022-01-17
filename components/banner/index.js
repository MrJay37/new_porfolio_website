import BannerStyles from './banner.module.scss'

export default function Banner() {
    return <>
        <div className={BannerStyles.container}>
            <img 
                className={BannerStyles.bannerPic}
                src='images/Background.png'
            
            />
            <div className={BannerStyles.bannerText}>
                Hi, I'm Sanket
                <br />
                I make music and software
            </div>
        </div>
    </>
}