import { useState } from "react";
import Layout from "../components/layout";
import Styles from './contact.module.scss'

function Notification(props) {
    return <div className={
        Styles.notification 
        + (props.error ? ' error_background' : ' success_background')
        }
        style={{
            transform: props.showNotification ? 'translate(-50%, -80%) translateX(0%)' : ' translate(-50%, -80%) translateX(400%)',
            filter: props.showNotification ? 'opacity(1)' : 'opacity(0)'
        }}    
    >
        {props.message}
    </div>
}

export default function Contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState('Error message')
    const [showNotification, setShowNotification] = useState(false)
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

    return <Layout home={false} title='Sanket Jain | Contact'>
        <div className='pagesTitle'>
            Contact
        </div>
        <div className={Styles.container}>
            <Notification message={notificationMessage} error={error} showNotification={showNotification}/>
            <div className={Styles.greeting}>
                Thank you for visiting my website! Leave me a message if you have any questions!
            </div>
            <form className={Styles.contactForm} onSubmit={sendMessage}>
                <div className={Styles.contactFormItem}>
                    <label htmlFor={'contactFormName'} className={Styles.contactFormItemLabel}>Name</label>
                        <input id="contactFormName" className={Styles.contactFormItemField} placeholder="What can I call you?" onChange={evt => setName(evt.target.value)} value={name} />
                </div>
                <div className={Styles.contactFormItem}>
                    <label htmlFor={'contactFormName'} className={Styles.contactFormItemLabel}>Email</label>
                    <input id="contactFormName" className={Styles.contactFormItemField} placeholder="I'll reply back on this" onChange={evt => setEmail(evt.target.value)} value={email} />
                </div>
                <div className={Styles.contactFormItem}>
                    <label htmlFor={'contactFormName'} className={Styles.contactFormItemLabel}>Message</label>
                    <textarea id="contactFormName" className={Styles.contactFormItemTextarea} onChange={evt => setMessage(evt.target.value)} value={message} />
                </div>
                {!waiting ? <button className={Styles.contactFormSubmitButton} type='submit'>
                    Send
                </button> : <></>}
            </form>
        </div>
    </Layout>
}