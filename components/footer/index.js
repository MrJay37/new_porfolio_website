import FooterStyles from './footer.module.scss'

export default function Footer ({ home }) {
    return <div className={FooterStyles.container}>
        <footer>
            &#169; 2022 Sanket Jain | Made using Next JS | Hosted on Netlify
        </footer>
    </div>
}