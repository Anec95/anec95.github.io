import { Link } from "react-router-dom";
import styled from "styled-components";


export const DescriptionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const ProfTitle = styled.h1`
    font-size: 50px;
    margin-bottom: 40px;

    @media (max-width: 500px) {
        font-size: 30px;
        margin-bottom: 30px;
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
`

export const SkillTitle = styled.h3`
    font-size: 30px;
    margin: 50px 0;

    @media (max-width: 500px) {
        font-size: 22px;
        margin: 40px 0;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 35px;
    }
`

export const DevelopContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 40px;

    @media (max-width: 500px) {
        margin-bottom: 0px;
        flex-wrap: wrap;
    }
`

export const DevelopLink = styled(Link)`
    text-decoration: none;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
        margin: 15px;
    }
`

export const DevelopSvg = styled.img`
    width: ${props => props.size === "small" ? "88px" : "60px"};
    margin-bottom: 10px;

    @media (max-width: 500px) {
        width: ${props => props.size === "small" ? "70px" : "42px"};
        margin-bottom: 10px;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const DevelopText = styled.p`
    font-size: 18px;
    font-variant: ${props => props.type === "small-caps" ? "small-caps" : ""};

    @media (max-width: 500px) {
        font-size: 16px;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`