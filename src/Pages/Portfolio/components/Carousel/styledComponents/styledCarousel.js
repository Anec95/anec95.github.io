import styled from "styled-components";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

// CARDCONTAINER


export const CardStorage = styled(Carousel)`
    width: 80%; 
    height: 500px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 12px;
    box-shadow: inset 2px 2px 10px var(--dark);
    background-color: var(--light);
    padding: 10px;

    @media (max-width: 500px) {
        width: 85%;
        margin-top: 15px;
        height: 400px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 85%;
        height: 470px;
        margin-top: 50px;
    } 
` 


//  CARD

export const Card = styled.div`
    background-color: var(--background);
    box-shadow: 2px 2px 10px var(--dark);
    width: 350px;
    height: 480px;
    border-radius: 12px;

    @media (max-width: 500px) {
        width: 290px;
        height: 320px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 320px;
        height: 450px;
    }
`

export const ClipProject = styled.video`
    width: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    @media (max-width: 500px) {
        height: 100px;
    }
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
        font-size: 14px;
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

export const ArrowBtnRight = styled.button`
      position: absolute;
      right: -20px;
      background-color: transparent;
      border: none;
      color: var(--first-color);
      font-size: 120px;
      cursor: pointer;
    `
    export const ArrowBtnLeft = styled.button`
    position: absolute;
    left: -20px;
    background-color: transparent;
    border: none;
    color: var(--first-color);
    font-size: 120px;
    cursor: pointer;
  `
