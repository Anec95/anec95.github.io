import { useState } from "react"
import { InfoDiv, InfoIcon, InfoParagraph } from "../styledComponents/styledEscapeRoom"


function InfoBtn (props) {
    const [show, setShow] = useState(false)

    function handleShow() {
        setShow(oldValue => !oldValue)
    }

    return(
        <InfoDiv
            show={show}
            dark={props.dark}
            onClick={handleShow}
        >
            {show === false &&
                <InfoIcon
                    className="material-icons-outlined"
                    dark={props.dark}
                >
                    question_mark
                </InfoIcon>
            }
            {show &&
                <InfoParagraph
                    dark={props.dark}
                >
                    Questo template dal volto misterioso e intrigante si presta alla grande per siti
                    di presentazione che lavorano nell'occulto. E se fosse il sito vetrina della tua Escape Room?
                </InfoParagraph>
            }
        </InfoDiv>
    )
}

export default InfoBtn