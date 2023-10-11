import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;
    padding-top: 200px;
    box-sizing: border-box;
    background-color: #8EA0B0;
    background-color: var(--background);

    display: flex;
    justify-content: center;

    @media (max-width: 500px) {
        flex-direction: column;
        padding-top: 150px;
        justify-content: flex-start;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`

export const StyledInfoBox = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 500px) {
        width: 100%;
        align-items: center;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 100%;
        align-items: center;
    }
`

export const StyledProjectClip = styled.video`
    width: 100%;
    height: max-content;
    border-radius: 12px;
    box-shadow: 10px 10px 30px var(--text_black);

    @media (max-width: 500px) {
        
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const StyledProjectLink = styled(Link)`
    text-decoration: none;
    font-family: 'Aboreto';
    font-weight: 900;
    color: var(--text_black);
    padding-top: 15px;

    @media (max-width: 500px) {
        padding-left: 30px;
        align-self: flex-start;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 22px;
    }
`

export const StyledDescriptionBox = styled.div`
    width: 600px;
    padding-left: 30px;
    box-sizing: border-box;

    @media (max-width: 500px) {
        width: 350px;
        padding-bottom: 50px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        padding-bottom: 100px;
    }
`

export const StyledTitle = styled.h1`
    color: var(--text_black);
    font-size: 40px;
    
    @media (max-width: 500px) {
        font-size: 25px;
        padding-top: 20px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        padding-top: 50px;
    }
`

export const StyledParagraph = styled.p`
    color: var(--text_black);
    padding-top: 30px;
    font-size: 18px;
    line-height: 1.5;

    @media (max-width: 500px) {
        padding-top: 10px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 22px;
    }
`