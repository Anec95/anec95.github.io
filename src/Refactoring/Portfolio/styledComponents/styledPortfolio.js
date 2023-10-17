import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 200px;
    background-color: var(--background);

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 500px) {
        padding-top: 120px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const StyledTitle = styled.h1`
    width: 1000px;
    color:  var(--text_black);    
    font-size: 60px;

    @media (max-width: 500px) {
        width: 80%;
        font-size: 30px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 600px;
        font-size: 50px;
    }
`

export const StyledTextBox = styled.div`
    width: 1000px;
    padding-top: 50px;
    padding-left: 50px;
    color:  var(--text_black);

    @media (max-width: 500px) {
        width: 80%;
        padding-top: 10px;
        padding-left: 10px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 600px;
        padding-top: 20px;
        padding-left: 20px;
    }
`

export const StyledParagraph = styled.p`
    font-size: 22px;
    padding: 15px 0;

    @media (max-width: 500px) {
        font-size: 18px;
        padding: 10px 0;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`


// CAROUSEL

export const CarouselContainer = styled.div`
    box-sizing: border-box;
    width: max-content;
    height: 62%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
        all: unset;

        padding: 0;
        height: 300px;
        justify-content: center;
        bottom: 65px; 
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        justify-content: center;
        padding: 0;
    }
`

export const CardStorage = styled(Carousel)`
    width: 1050px; 
    height: 85%;
    position: relative; 
    border-radius: 12px;
    box-sizing: border-box;
    box-shadow: inset 2px 2px 10px var(--scuro);
    background-color: var(--about_me_text);
    padding: 10px;
    /* border: 0.1px solid var(--text_black); */

    @media (max-width: 500px) {
        width: 340px;
        margin-top: 15px;
        height: 250px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 680px;
        height: 500px;
        margin-top: 0px;
    } 
` 


// CARD

export const StyledCard = styled.div`
    background-color: var(--text_black);
    width: 320px;
    height: 380px;
    border-radius: 12px;
    box-shadow: 2px 2px 10px var(--scuro);
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        height: 230px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 300px;
        height: 450px;
    }
`

export const ProjectImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    @media (max-width: 500px) {
        height: 200px;
    }
`

export const ProjectTitle = styled.h3`
    font-family: 'Aboreto';
    color: var(--about_me_text);
    padding: 6px;

    @media (max-width: 500px) {
        font-size: 18px;
        padding: 0 10px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 22px;
        padding: 6px 20px;
    }
`

export const ProjectLink = styled(Link)`
    text-decoration: none;
    width: 100%;
    height: 90%;

    @media (max-width: 500px) {
        font-size: 16px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`