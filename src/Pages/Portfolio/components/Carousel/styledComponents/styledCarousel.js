import styled from "styled-components";
import { Link } from "react-router-dom";

// CARDCONTAINER

export const CardStorage = styled.div`
    width: 80%; 
    height: 500px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 12px;
    box-shadow: inset 2px 2px 10px var(--dark);
    background-color: var(--light);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;

    @media (max-width: 500px) {
        width: 85%;
        margin-top: 15px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 85%;
        height: 600px;
        margin-top: 50px;
    } 
` 


//  CARD

export const Card = styled.div`
    background-color: var(--background);
    /* box-shadow: 2px 2px 10px var(--dark); */
    width: 350px;
    height: 480px;
    /* margin-left: 40px;
    margin-top: 25px; */
    border-radius: 12px;
    z-index: 10;

    @media (max-width: 500px) {
        width: 290px;
        /* margin-left: 0px;
        margin-top: 15px; */
        height: 94%;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 320px;
        /* margin: auto;
        margin-top: 10px; */
        height: 96%;
    }
`

export const ClipProject = styled.video`
    width: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`

export const InfoProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;

    @media (max-width: 500px) {
        padding: 10px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const ProjectTitle = styled.h2`
    font-family: 'Aboreto';
    color: var(--first-color);
    margin-bottom: 10px;

    @media (max-width: 500px) {
        font-size: 20px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const ProjectDescription = styled.p`
    white-space: pre-line;
    text-align: justify;
    font-size: 16px;
    letter-spacing: 1px;
    margin-bottom: 15px;

    @media (max-width: 500px) {
        font-size: 16px;
        letter-spacing: 1px;
        margin-bottom: 15px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const ProjectLink = styled(Link)`
    font-family: 'Roboto';
    text-decoration: none;
    color: var(--first-color);
    font-size: 18px;
    font-weight: 600;
    font-variant: small-caps;
    margin-bottom: 5px;

    @media (max-width: 500px) {
        
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`


// BUTTON

export const ArrowBtn = styled.button`
    position: absolute;
    background-color: transparent;
    border: none;
    color: var(--first-color);
    top: 50%;
    transform: translateY(-50%);
    font-size: 120px;
    cursor: pointer;
    z-index: 10;

    ${
        props => props.direction === "left" ?
        {left: "-70px"} :
        props => props.direction === "right" ?
        {right: "-70px"} :
        ""
    }

    &:hover {
        font-size: 130px;

        ${
        props => props.direction === "left" ?
        {left: "-75px"} :
        props => props.direction === "right" ?
        {right: "-75px"} :
        ""
        }
    }
`
