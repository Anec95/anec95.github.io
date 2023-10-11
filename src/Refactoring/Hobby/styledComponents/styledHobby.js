import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-color: #597467;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 180px;

    @media (max-width: 500px) {
        padding-top: 120px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const StyledTitle = styled.h1`
    width: 1000px;
    font-size: 60px;
    color: var(--text_black);

    @media (max-width: 500px) {
        width: 350px;
        font-size: 30px;
        padding-bottom: 30px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const StyledGrid = styled.div`
    box-sizing: border-box;
    box-shadow: inset 2px 2px 10px var(--scuro);
    background-color: var(--about_me_text);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    color: #882200;
    height: 65%;
    border: 2px solid var(--scuro);
    border-radius: 12px;
    margin-top: 40px;
    overflow-x: hidden;
    overflow-y: auto;

    ::-webkit-scrollbar {
        height: 5px;
        width: 5px;
        display: block;
        background: var(--about_me_text);
    }

    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 1ex;
        display: block;
        background: var(--text_black);
    }

    ::-webkit-scrollbar-corner {
        display: block;
    }

    @media (max-width: 500px) {
        all: unset;

        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 350px;
        color: #882200;
        height: 400px;
        border: 2px solid var(--scuro);
        border-radius: 12px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 60%;
        right: 0%;
        padding: 0 90px 0 20px;
    }
`

export const StyledElement = styled(Link)`
    order: ${props => props.order};

    width: 95%;
    height: 200px;
    margin: 5px;
    position: relative;
    background-image: url(${props => props.background_photo});
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    border: 2px solid var(--text_black);
    box-shadow: 10px 10px 20px var(--text_black);

    @media (max-width: 500px) {
        width: 98%;
        height: 120px;
        margin: 2px;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`
export const StyledCardTitle = styled.h3`
    font-size: 30px;
    color: var(--second-light);
    position: absolute;
    bottom: 10px;
    right: 20px;

    @media (max-width: 500px) {
        
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`