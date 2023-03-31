import styled from "styled-components";

export const TemplateMain = styled.div`
    width: 100%;
    height: 20vh;
    box-sizing: border-box;

    @media (max-width: 500px) {
        margin-bottom: 50px;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {

    }
`

export const TemplateTitle = styled.h1`
    font-size: 50px;
    margin-bottom: 40px;

    @media (max-width: 500px) {
        font-size: 35px;
        margin-bottom: 10px;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {

    }
`

export const TemplateInfo = styled.p`
    font-size: 20px;

    @media (max-width: 500px) {
        margin-left: 10px;
    }
`