import { Link } from "react-router-dom";
import styled from "styled-components";

export const CaroselSection = styled.div`
    position: relative;
    height: 60vh;

    @media (max-width: 500px) {
        margin-bottom: 20px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        height: 70vh;
        width: 85vw;
    }
`

export const CaroselContainer = styled.div`
    position: absolute;
    top: 20px;
    margin-left: 50%;
    transform: translateX(-50%);
    background-color: var(--light);
    width: 80%;
    height: 85%;
    border-radius: 12px;
    box-shadow: inset 2px 2px 10px var(--dark);

    @media (max-width: 500px) {
        top: 10px;
        width: 90%;
        height: 120%;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const CardContainer = styled.div`
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
`


//CAROSEL BTN

export const Btn = styled.button`
    position: absolute;
    background-color: transparent;
    border: none;
    color: var(--first-color);
    top: 50%;
    transform: translateY(-50%);
    font-size: 120px;
    cursor: pointer;

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

    @media (max-width: 500px) {
        
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`


//  CARD

export const Card = styled.div`
    display: inline-block;
    background-color: var(--background);
    box-shadow: 2px 2px 10px var(--dark);
    width: 350px;
    height: 90%;
    margin-left: 40px;
    margin-top: 25px;
    border-radius: 12px;

    @media (max-width: 500px) {
        width: 300px;
        margin-left: 12px;
        margin-top: 15px;
        height: 94%;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
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