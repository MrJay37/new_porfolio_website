import IntroStyles from './introduction.module.scss'


export default function Introduction () {
    return <div className={IntroStyles.container}>
        <h1 className={IntroStyles.title}>
            Who I am?
        </h1>
        <div className={IntroStyles.introBox}>
            <div>
                <p className={IntroStyles.text}>
                    I'm Sanket Jain. I live in Bay Ridge, Brooklyn. My birthday is April 14th, 1996. I play the piano.
                    I graduated from Stevens Institute of Technology in December 2020 with a Masters in Computer Engineering. 
                    I worked as a front-end engineer at Contentstack from May 2020 to Nov 2020 and 
                    I'm the software engineering analyst at Approved Energy since January 2021. 
                    I'm also the CEO of a production house called Abagauss.
                </p>
                <p className={IntroStyles.text}>
                    I like ramen, I watch a lot of anime (a lot of anime).
                    One Piece is not so long.
                    India deserves a better government.
                    Season 3 of Covid is dull.
                    When will the new Shrek movie come out?
                    Do you give up on learning a new hobby if you're not immediately good at it or are you not normal?
                </p>
            </div>            
            <img
                className={IntroStyles.profilePicture}
                src='/images/picofMe.jpg'
            />
        </div>
    </div>
}