import styled from "styled-components"
// #BD8700 gold color

export const BodyHome = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #161E11;
    background-color: ${props => props.dark ? "#2F4858" : "#062331"};
    overflow: hidden;

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    } 
`

export const Title = styled.h1`
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

    @media (max-width: 500px) {
        font-size: 50px;
        top: 30px;
        left: 10px;
        z-index: 0;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 60px;
        top: 80px;
        left: 20px;
        z-index: 0;
    } 
`

export const Button = styled.button`
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

    @media (max-width: 500px) {
        bottom: 5px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        right: 60px;
    } 
`

export const LightContainer = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 20px;

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        top: 50px;
    } 
`

export const Line = styled.div`
    height: 18vh;
    width: 8px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${props => props.dark ? "#170000" : "black"};
    position: absolute;
    top: -12vh;

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    } 
`

export const Lamp = styled.div`
    width: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border: 5vh solid transparent;
    border-bottom-color: ${props => props.dark ? "#CF9EAC" : "#28161C"};

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    } 
`

export const LightCone = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -70vh;
    width: 50px;
    border: 80vh solid transparent;
    border-bottom-color: ${props => props.dark ? "rgba(250, 235, 215, 0.7)" : "transparent"};
    transition: 1.5s;

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    } 
`

export const World = styled.div`
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

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    } 
`

export const InfoDiv = styled.div`
    cursor: pointer;
    position: absolute;
    right: 50px;
    top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.show ? "240px" : "50px"};
    height: ${props => props.show ? "max-content" : "50px"};
    border-radius: ${props => props.show ? "12px" : "50%"};
    border: 3px double ${props => props.dark ? "palevioletred" : "black"};
    box-shadow: ${props => props.dark ? "0 0 50px palevioletred" : ""}, inset 0 0 20px ${props => props.dark ? "palevioletred" : ""};

    @media (max-width: 500px) {
        z-index: 1;
        right: 20px;
        top: 150px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        z-index: 1;
    } 
`

export const InfoIcon = styled.span`
    font-size: 26px;
    color: ${props => props.dark ? "palevioletred" : "black"};

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    } 
`

export const InfoParagraph = styled.p`
    width: 220px;
    color: ${props => props.dark ? "palevioletred" : "black"};
    padding: 15px 20px;
    font-size: 18px;

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 20px;
    } 
`