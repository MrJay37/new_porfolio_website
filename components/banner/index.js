import BannerStyles from './banner.module.scss'

export default function Banner() {
    return <>
        <div className={BannerStyles.container}>
            <img 
                className={BannerStyles.bannerPic}
                src='images/newBanPic.jpg'
            />

            <div className={BannerStyles.bannerText}>
                <h1 className={BannerStyles.bannerHeading}>
                    Hi, I'm Sanket
                </h1>
                <h2 className={BannerStyles.bannerSubHeading}>
                    I make music and software
                </h2>
            </div>
        </div>
    </>
}