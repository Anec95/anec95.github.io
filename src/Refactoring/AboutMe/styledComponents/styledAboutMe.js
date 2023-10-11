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
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;

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
        padding-top: 150px;
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
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 600px;
        font-size: 50px;
    }
`

export const StyledTextBox = styled.div`
    width: 1000px;
    padding-top: 40px;
    padding-left: 50px;
    margin-bottom: 80px;

    display: flex;
    justify-content: center;

    @media (max-width: 500px) {
        width: 350px;
        padding-top: 20px;
        padding-left: 10px;
        margin-bottom: 50px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 600px;
        padding-top: 30px;
        padding-left: 20px;
        margin-bottom: 50px;
    }
`

export const StyledParagraphsBox = styled.div`
    color: var(--text_black);
    flex: 1;

    @media (max-width: 500px) {
        
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const StyledParagraph = styled.p`
    font-size: 22px;
    padding: 15px 0;

    @media (max-width: 500px) {
        font-size: 18px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 22px;
    }
`

export const StyledPhoto = styled.img`
    width: 200px;
    object-fit: cover;
    margin-right: 50px;
    border-radius: 12px;
    box-shadow: 15px 10px 30px var(--text_black);
    filter: saturate(50%);

    @media (max-width: 500px) {
        width: 100px;
        margin-right: 20px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        margin-right: 40px;
    }
`


//PROFESSIONALMENTE ME

export const DescriptionContainer = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    @media (max-width: 500px) {
        width: 350px;
        margin-top: 20px;
        align-items: center;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        width: 600px;
        margin-top: 20px;
        padding-left: 20px;
        align-items: center;
    }
`

export const ProfParagraph = styled.p`
    font-size: 20px;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        font-size: 18px;
        margin-bottom: 10px;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 22px;
    }
`

export const SkillContainer = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        width: 350px;
        justify-content: center;
        align-items: center;
        padding-bottom: 80px;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        width: 600px;
        padding-bottom: 80px;
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

    @media (min-width: 501px) and (max-width: 1000px) {
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
    margin: 10px 50px;

    @media (max-width: 500px) {
        margin: 15px;
        flex: 25%;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const DevelopSvg = styled.img`
    width: ${props => props.size === "small" ? "88px" : "60px"};
    padding-bottom: 10px;

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
        width: 130px;
        text-align: center;
        word-wrap: break-word;
    }
`