import styled from "styled-components";
import backgroundImg from 'Assets/images/analogic-photo/3-cime-autumn-2021.JPG'

export const HomeBody = styled.main`
    box-sizing: border-box;
    height: 100vh;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    filter: opacity(50%);

    @media (max-width: 500px) {
        background-position: -220px 0;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
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
    }
`

export const LogoImg  = styled.img`
    height: 200px;
    transform: rotate(-10deg);
    
    @media (max-width: 500px) {
        height: 60px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const TitleBox = styled.div`
    height: 60px;
    width: max-content;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 500px) {
        
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const LogoTitle = styled.h1`
    flex: 1;
    font-size: 90px;
    
    @media (max-width: 500px) {
        font-size: 30px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const LogoSubtitle = styled.h3`
    flex: 1;
    font-size: 60px;
    
    @media (max-width: 500px) {
        font-size: 22px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`