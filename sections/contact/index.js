import { useState } from "react";
import Styles from './index.module.scss'
import {AiFillGithub, AiFillLinkedin, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'


function Notification(props) {
    return props.showNotification ? <div className={
        'notification '+ (props.error ? ' error_background' : ' success_background')
        }  
    >
        {props.message}
    </div>
    : <></>
}

function DocItem(doc) {
    return <div className={Styles.docItem}>
        <div className={Styles.docText}>
            {doc.text}
        </div>
        <div className={Styles.docButton + ' flex'}>
            <a target="_blank" href={doc.url}>{doc.docButtonText}</a>
        </div>
    </div>
}

export default function Contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)
    const [showNotification, setShowNotification] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState('')
    const [waiting, setWaiting] = useState(false)

    const sendMessage = async (evt) => {
        setShowNotification(false)
        evt.preventDefault()

        let errors = []
        
        if (name.trim() == ''){
            errors.push('name')
        }

        if (email.trim() == ''){
            errors.push('email')
        }

        if (message.trim() == ''){
            errors.push('message')
        }

        if (errors.length > 0){
            setNotificationMessage('Please provide valid ' + errors.join(', '))
            setError(true) 
        }

        else{
            setWaiting(true)
            let res = await fetch(
                'https://ra257dy6pa.execute-api.us-east-2.amazonaws.com/Live/contact',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'name': name,
                        'email': email,
                        'message': message
                    })
                }
            )
            let data = await res.json()
            setWaiting(false)
            let res_message = JSON.parse(data['body'])
            // let res_message = {
            //     'message': 'Email sent successfully'
            // }
            
            setNotificationMessage(res_message['message'])
            setName('')
            setEmail('')
            setMessage('')
        }

        setShowNotification(true)
        
        setTimeout(() => {
            setShowNotification(false)
            setTimeout(() => {
                setError(false)
            }, 300);
        }, 5000);
    }

    return <div className={Styles.container + ' section'} id='contact'>
        <div className="sectionTitle">Contact</div>
        <Notification message={notificationMessage} error={error} showNotification={showNotification}/>
        <div className={Styles.greeting}>
            Thank you for visiting my website! Leave me a message if you have any questions!
        </div>
        <div className={Styles.contactContainer + ' sectionContainer'}>
            <form className={Styles.contactForm} onSubmit={sendMessage}>
                <div className={Styles.contactFormItem}>
                    <label 
                        htmlFor={"contactFormName"} 
                        className={Styles.contactFormItemLabel
                    }>
                        Name
                    </label>
                    <input 
                        id={"contactFormName"} 
                        className={Styles.contactFormItemField} 
                        placeholder="What can I call you?" 
                        onChange={evt => setName(evt.target.value)} 
                        value={name} 
                    />
                </div>
                <div className={Styles.contactFormItem}>
                    <label 
                        htmlFor={'contactFormName'} 
                        className={Styles.contactFormItemLabel}
                    >
                        Email
                    </label>
                    <input 
                        id="contactFormName" 
                        className={Styles.contactFormItemField} 
                        placeholder="I'll reply back on this" 
                        onChange={evt => setEmail(evt.target.value)} 
                        value={email} 
                    />
                </div>
                <div className={Styles.contactFormItem}>
                    <label 
                        htmlFor={'contactFormName'} 
                        className={Styles.contactFormItemLabel}
                    >
                        Message
                    </label>
                    <textarea 
                        id="contactFormName" 
                        className={Styles.contactFormItemTextarea} 
                        onChange={evt => setMessage(evt.target.value)} 
                        value={message} 
                    />
                </div>
                {!waiting ? <button className={Styles.contactFormSubmitButton} type='submit'>
                    Send
                </button> : <></>}
            </form>
            <div className={Styles.documents}>
                <div className={Styles.docBox}>
                    <div className={Styles.docs}>
                        <DocItem 
                            text={'Download my resume here!'} 
                            url="https://drive.google.com/file/d/1Qmynu9CUW_dn51qo57UTkNlVMEoTerkp/view?usp=share_link"
                            docButtonText={'Resume'}
                        />
                        <DocItem 
                            text={'Download my favorite meme here!'} 
                            url="https://drive.google.com/file/d/1mKdCEgv2kd6w902U6iIdmFRmRnhWiyFh/view?usp=sharing"
                            docButtonText={'Meme'}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className={Styles.footer + ' flex-center-align'}>
            <div className={Styles.trademark}>
                &#169; 2022 Sanket Jain 
            </div>
            <div className={Styles.socials}>
                <span><a target="_blank" href="https://www.linkedin.com/in/sanket-jain-415a606a/"><AiFillLinkedin /></a></span>
                <span><a target="_blank" href="https://github.com/MrJay37"><AiFillGithub/></a></span>
                <span><a target="_blank" href="https://www.youtube.com/channel/UC4QOttreVJ4zN6W1uBjtHIQ"><AiFillYoutube /></a></span>
                <span><a target="_blank" href="https://www.instagram.com/abagauss/"><AiFillInstagram /></a></span>
            </div>
        </div>
    </div>
}
