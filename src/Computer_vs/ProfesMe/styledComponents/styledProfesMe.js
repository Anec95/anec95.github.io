import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledTextContainer = styled.div`
    box-sizing: border-box;
    box-shadow: inset 2px 2px 10px var(--scuro);
    height: 50%;
    overflow-y: scroll;
    position: absolute;
    right: 5%;
    top: calc(10% + 180px);
    width: 50%;
    padding: 20px;
    color: #882200;
    border: 2px solid var(--scuro);
    border-radius: 12px 0 0 12px;

    ::-webkit-scrollbar {
        height: 5px;
        width: 5px;
        display: block;
        background: var(--light-invisible);
    }

    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 1ex;
        display: block;
        background: #882200;
    }

    ::-webkit-scrollbar-corner {
        display: block;
    }

    @media (max-width: 500px) {
        width: 70%;
        height: 70%;
        top: calc(8% + 90px);
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        width: 55%;
        height: 60%;
    }
`

export const DescriptionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const ProfParagraph = styled.p`
    font-size: 20px;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        font-size: 18px;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 22px;
    }
`

export const SkillContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        justify-content: center;
        align-items: center;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const SkillTitle = styled.h3`
    font-size: 30px;
    margin: 50px 0;

    @media (max-width: 500px) {
        font-size: 22px;
        margin: 20px 0;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 35px;
    }
`

export const DevelopContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: 500px) {
        margin-bottom: 0px;
        justify-content: center;
        align-items: center;
    }
`

export const DevelopLink = styled(Link)`
    text-decoration: none;
    color: #882200;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
        margin: 15px;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const DevelopSvg = styled.img`
    width: ${props => props.size === "small" ? "88px" : "60px"};
    margin: 15px 50px;

    @media (max-width: 500px) {
        width: ${props => props.size === "small" ? "70px" : "42px"};
        margin-bottom: 10px;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        width: ${props => props.size === "small" ? "75px" : "47px"};
        margin: 15px 30px;
    }
`

export const DevelopText = styled.p`
    font-size: 18px;
    font-variant: ${props => props.type === "small-caps" ? "small-caps" : ""};

    @media (max-width: 500px) {
        font-size: 16px;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        margin-bottom: 20px;
        width: 120px;
        text-align: center;
        word-wrap: break-word;
    }
`