import styled from "styled-components"


export const PhotoDiv = styled.div`
    flex: 1;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column-reverse;

    @media (max-width: 500px) {
        justify-content: flex-end;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        justify-content: flex-end;
    }
`

export const PhotoHomepage = styled.img`
    width: 1000px;

    @media (max-width: 500px) {
        width: 100%;
        margin-top: 40px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 100%;
        margin-top: 80px;
    }
`

export const QuotesContainer = styled.div`
    position: absolute;
    top: 200px;
    left: 20px;
    display: flex;
    flex-direction: column;
    color: var(--dark);

    @media (max-width: 500px) {
        top: 40px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        top: 90px;
    }
`

export const Quotes = styled.h4`
    font-family: 'Amatic SC';
    font-size: 40px;

    @media (max-width: 500px) {
        font-size: 22px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 50px;    
    }
`

export const Author = styled.h6`
    font-family: 'Poppins';
    font-size: 20px;

    @media (max-width: 500px) {
        font-size: 15px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 25px;
    }
`