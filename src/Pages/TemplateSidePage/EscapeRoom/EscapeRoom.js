import { useState } from "react"
import styled from "styled-components"


// #BD8700 gold color

const BodyHome = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #161E11;
    background-color: ${props => props.dark ? "#2F4858" : "#062331"};
    overflow: hidden;
`

const Title = styled.h1`
    position: relative;
    width: max-content;
    z-index: 1;
    top: 50px;
    left: 120px;
    margin: 0;
    font-size: 80px;
    color: ${props => props.dark ? "palevioletred" : "black"};
    font-family: 'Neonderthaw';
    transition: 1.5s;
    text-shadow: 0 0 50px ${props => props.dark ? "palevioletred" : ""};
`

const Button = styled.button`
    font-size: 20px;
    cursor: pointer;
    width: 140px;
    height: 40px;
    border-radius: 9px;
    color: ${props => props.dark ? "#170000" : "#49ff18"};
    border: 2px double ${props => props.dark ? "#170000" : "#49ff18"};
    font-family: 'Neonderthaw';
    background-color: transparent;
    position: absolute;
    bottom: 50px;
    right: 120px;
    z-index: 1;
    transition: 1s;
    text-shadow: ${props => props.dark ? "" : "0 0 50px #49ff18"};
    box-shadow: ${props => props.dark ? "" : "0 0 50px #49ff18"}, inset 0 0 20px ${props => props.dark ? "" : "#49ff18"};
`

const LightContainer = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 20px;
`

const Line = styled.div`
    height: 18vh;
    width: 8px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.dark ? "#170000" : "black"};
    position: absolute;
    top: -12vh;
`

const Lamp = styled.div`
    width: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border: 5vh solid transparent;
    border-bottom-color: ${props => props.dark ? "#CF9EAC" : "#28161C"};
`

const LightCone = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -70vh;
    width: 50px;
    border: 80vh solid transparent;
    border-bottom-color: ${props => props.dark ? "rgba(250, 235, 215, 0.7)" : "transparent"};
    transition: 1.5s;
`

const World = styled.div`
    position: relative;
    border-radius: 50%;
    background-color: ${props => props.dark ? "rgb(255, 215, 0)" : "#170000"};
    filter: brightness(${props => props.dark ? "65%" : "100%"});
    box-shadow: ${props => props.dark ? "inset 0px -10px 5px 2px #4B4030" : "none"}, 0px 300px 100px #4B4030;
    /* box-shadow: ${props => props.dark ? "inset 0px -10px 5px 2px #4B4030" : "none"}; */
    width: ${props => props.dark ? "100px" : "20px"};  //example multiple ternary operator = dark ? "20px" : red ? "40px" : "30px"
    height: ${props => props.dark ? "100px" : "20px"};
    left: 50%;
    top: 50%;
    transform: translateX(-50%);
    transition: 3s;
    z-index: 1;
    /* rotate: ${props => props.dark ? "3600deg" : "0"};     */
`


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