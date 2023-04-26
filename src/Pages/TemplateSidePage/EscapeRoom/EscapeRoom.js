import { useState } from "react"
import { BodyHome, Title, Button, LightContainer,Line, Lamp, LightCone, World } from "./styledComponents/styledEscapeRoom"
import InfoBtn from "./components/InfoBtn"

function EscapeRoom() {
    const [dark, setDark] = useState(false)
    // const constraintsRef = useRef(null)
    // const [dragDrop, setDragDrop] = useState([false, false])


    function getDark() {
        setDark(oldValue => !oldValue)
    }

    // function handleDrop(index) {
    //     const newArray = [false, false]
    //     newArray[index] = true
    //     setDragDrop(newArray)
    // }

    return (
        <BodyHome
            dark={dark}
            // as={motion.div}
            // ref={constraintsRef}
        >
            <InfoBtn
                dark={dark}
            />
            <Title dark={dark}>Thomas Miori</Title>
            <Button onClick={getDark} dark={dark}>Press Me</Button>
            <LightContainer>
                <Line dark={dark} />
                <Lamp dark={dark} />
                <LightCone dark={dark} />
            </LightContainer>
            <World
                dark={dark}
                // as={motion.div}
                // drag
                // onMouseDown={() => {handleDrop(0)}}
                // onMouseLeave={() => {handleDrop(1)}}
                // dragConstraints={constraintsRef}
                // dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
            />
        </BodyHome>
    )
}

export default EscapeRoom