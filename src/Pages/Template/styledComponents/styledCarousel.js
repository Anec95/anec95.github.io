import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CarouselContainer = styled.div`
    position: relative;
    margin-left: 50%;
    transform: translateX(-50%);
    background-color: var(--light);
    width: 90%;
    height: 75%;
    border-radius: 12px;
    box-shadow: inset 2px 2px 10px var(--dark);

    @media (max-width: 500px) {
        width: 94%;
        height: 75%;
        margin-left: 49%; 
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        width: 100%;
        height: 70%;
    }
`

export const CardContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const Card = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 95%;
    height: 90%;
    border-radius: 12px;
    transform: translate(-50%, -50%);

    @media (max-width: 500px) {
        width: 90%;
        height: 80%;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {

    }
`

export const TemplateLink = styled(NavLink)`
    width: 100%;
    height: 100%;
    text-decoration: none;
`

export const TemplateImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    box-shadow: 2px 2px 10px var(--dark);
`


//BUTTON

export const Arrow = styled.button`
    position: absolute;
    border: none;   
    background-color: transparent;

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
`