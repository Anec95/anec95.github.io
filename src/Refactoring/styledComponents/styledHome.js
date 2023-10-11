import styled from "styled-components";
import backgroundImg from 'Assets/images/analogic-photo/3-cime-autumn-2021.JPG'

export const HomeBody = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    filter: opacity(50%);

    @media (max-width: 500px) {
        background-position: -240px 0;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        background-position: -350px 0;
    }
`

export const LogoBox = styled.div`
    position: absolute;
    top: 25%;
    left: 10%;
    color: var(--title-color);
    width: max-content;
    display: flex;
    align-items: center;

    @media (max-width: 500px) {

    }

    @media (min-width: 501px) and (max-width: 1000px) {
        top: 30%;
    }
`

export const LogoImg  = styled.img`
    height: 200px;
    transform: rotate(-10deg);
    
    @media (max-width: 500px) {
        height: 60px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        height: 120px;
    }
`

export const TitleBox = styled.div`
    height: 200px;
    width: max-content;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 500px) {
        height: 60px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        height: 120px;
    }
`

export const LogoTitle = styled.h1`
    flex: 1;
    font-size: 90px;
    
    @media (max-width: 500px) {
        font-size: 30px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 50px;
    }
`

export const LogoSubtitle = styled.h3`
    flex: 1;
    font-size: 60px;
    
    @media (max-width: 500px) {
        font-size: 22px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 40px;
    }
`