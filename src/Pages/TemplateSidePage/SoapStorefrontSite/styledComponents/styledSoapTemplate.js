import styled from "styled-components";
import oil from "Assets/images/photo-template/oli.jpg"
import soap from "Assets/images/photo-template/soap.jpg"


export const SoapMain = styled.main`
    width: 100vw;
    height: 100vh;
    position: relative;
    background-image: url(${oil});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 500px) {
        background-image: url(${soap});
    }

    @media (min-width: 501px) and (max-width: 1000px) {

    } 
`

export const SoapTitle = styled.h1`
    font-size: 80px;
    width: max-content;
    position: absolute;
    top: 40px;
    margin-left: 50%;
    transform: translateX(-50%);

    @media (max-width: 500px) {
        font-size: 30px;
        word-wrap: break-word;
        width: 80%;
        margin-left: 10%;
        transform: translateX(0%);
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 60px;
        word-wrap: break-word;
        width: 80%;
        margin-left: 10%;
        transform: translateX(0%);
    } 
`

export const NavContainer = styled.div`
    width: 70%;
    height: 60%;
    position: absolute;
    left: 15%;
    top: 20%;
    display: flex;
    justify-content: space-around;

    @media (max-width: 500px) {
        flex-direction: column;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 90%;
        height: 50%;
        left: 5%;
        top: 25%;
    } 
`

export const NavMenu = styled.div`
    width: 48%;
    height: 100%;
    border: 2px solid var(--light);
    border-radius: 12px;
    cursor: pointer;

    @media (max-width: 500px) {
        width: 100%;
        height: 48%;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    } 
`

export const ElementTitle = styled.h2`
    width: 100%;
    padding: 20px 30px;
    box-sizing: border-box;
    font-size: 40px;
    text-align: right;
    color: var(--light);

    @media (max-width: 500px) {
        font-size: 22px;
        color: var(--first-color);
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    } 
`

export const InfoDiv = styled.div`
    position: absolute;
    right: 50px;
    top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.show ? "240px" : "50px"};
    height: ${props => props.show ? "max-content" : "50px"};
    border-radius: ${props => props.show ? "12px" : "50%"};
    border: 3px solid var(--light-transparent);
    cursor: pointer;

    @media (max-width: 500px) {
        right: 60px;
        top: 20px;
        z-index: 1;        
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        top: 120px;
        z-index: 1;
        width: ${props => props.show ? "300px" : "50px"};
    } 
`

export const InfoIcon = styled.span`
    font-size: 26px;
    color: var(--light-transparent);

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    } 
`

export const InfoParagraph = styled.p`
    width: 220px;
    color: var(--light-transparent);
    padding: 15px 20px;
    font-size: 18px;

    @media (max-width: 500px) {
        color: var(--first-color);
        background-color: var(--light-transparent);
        border-radius: 8px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 25px;
        color: var(--first-color);
        width: 280px;
    } 
`