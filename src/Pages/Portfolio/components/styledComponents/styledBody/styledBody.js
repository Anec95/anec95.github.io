import styled from "styled-components";

export const BodyConteiner = styled.div`
    height: 40vh;

    @media (max-width: 500px) {
        
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        height: 30vh;
    }
`

export const InfoContainer = styled.div`
    margin-left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 100%;

    @media (max-width: 500px) {
        margin-left: 20px;
        transform: translateX(0%);
        width: 100%; 
    }
`

export const BodyTitle = styled.h1`
    padding-top: 50px;
    font-size: 60px;

    @media (max-width: 500px) {
        padding-top: 30px;
        font-size: 35px;
    }
`

export const Author = styled.h3`
    font-size: 30px;
    padding: 10px 5px;

    @media (max-width: 500px) {
        font-size: 22px;
        padding: 5px 10px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const Description = styled.p`
    margin: 20px 40px;
    font-size: 18px;

    @media (max-width: 500px) {
        margin: 15px;
        font-size: 16px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`