import styled from "styled-components"

export const NavbarContaiener = styled.div`
    flex: 0.8;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 500px) {
        justify-content: flex-start;
        margin-top: -15vh;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        align-content: center;
        width: 100%;
        margin-top: -10vh;
    }
`

export const Title = styled.h1`
    font-family: 'Aboreto';
    font-size: 50px;
    margin-left: 70px;
    margin-bottom: 5px;
    letter-spacing: 4px;
    color: var(--first-color);

    @media (max-width: 500px) {
        font-size: 30px;
        margin-left: 10px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        margin-left: 130px;
    }
`

export const Subtitle = styled.h2`
    font-size: 28px;
    font-family: 'Aboreto';
    margin-left: 80px;
    margin-bottom: 15px;
    letter-spacing: 2px;
    color: var(--first-color);

    @media (max-width: 500px) {
        font-size: 24px;
        margin-left: 20px;
        margin-bottom: 10px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 35px;
        margin-left: 140px;
        margin-bottom: 15px;
    }
`

export const Separe = styled.hr`
    width: 300px;
    border-color: var(--first-color);

    @media (max-width: 500px) {
        width: 250px;
    }    

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 450px;
    }
`