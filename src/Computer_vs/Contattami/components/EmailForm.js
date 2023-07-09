import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { StyledForm, StyledInput, StyledTextArea } from "../styledComponents/styledContattami"


function EmailForm() {
    const form = useRef();
    const [user_name, setUser_Name] = useState('')
    const [user_email, setUser_Email] = useState('')
    const [message, setMessage] = useState('')
    // const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        if (
            user_name !== "" &&
            user_email !== "" &&
            message !== "" 
        ) {
            // setLoading(true)
            emailjs
                .sendForm(
                    'service_8if60lb',
                    'template_bamzcx7',
                    form.current,
                    'M_sWxdslFueeSXRb9'
                )
                .then(
                    (result) => {
                        console.log(result.text)
                        // setLoading(false)  
                        alert("messaggio inviato con successo")                                              
                    },
                    (error) => {
                        console.log(error.text);
                        // setLoading(false)
                        alert("al momento non siamo riusciti a raggiungere il server, si prega di riprovare a contattarci nei prossimi giorni");
                    }
                );

            setUser_Name('')
            setUser_Email('')
            setMessage('')
        } else if (
            user_name === "" ||
            user_email === "" ||
            message === "" 
        ) {
            alert("Ricorda di compilare tutti i campi")
        } else {

        }
        
    };

    return (
        <StyledForm ref={form} onSubmit={sendEmail}>
            <StyledInput
                type="text"
                name="user_name"
                placeholder='Nome'
                value={user_name}
                onChange={(event) => {setUser_Name(event.target.value)}}
            />
            <StyledInput
                type="email"
                name="user_email"
                placeholder='Email'
                value={user_email}
                onChange={(event) => {setUser_Email(event.target.value)}}
            />
            <StyledTextArea
                name="message"
                value={message}
                placeholder='Scrivi il tuo messaggio qui...'
                onChange={(event) => {setMessage(event.target.value)}}
            />
            <StyledInput type="submit" value="INVIA" />
        </StyledForm>
    )
}

export default EmailForm