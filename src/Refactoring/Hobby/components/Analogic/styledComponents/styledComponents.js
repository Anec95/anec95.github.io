import styled from "styled-components";


export const SidePageContainer = styled.div`
    box-sizing: border-box;
    background-size: cover;
    position: relative;
    width: 100vw;
    height: 100vh;
    padding: 200px 15% 100px 15%;
    overflow-x: hidden;

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
        padding: 120px 40px 60px 40px;
    }
`

export const SidePageTitle = styled.h1`
    font-size: 50px;
    margin-bottom: 40px;

    @media (max-width: 500px) {
        font-size: 30px;
        margin-bottom: 20px;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        margin-bottom: 20px;
    }
`

export const StyledIcon = styled.button`
    font-size: 50px;
    position: fixed;
    top: 50px;
    left: 50px;
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;

    @media (max-width: 500px) {
        font-size: 35px;
        border-radius: 50%;
        left: 0px;
    }
`

export const InfoPageContainer = styled.div`
    background-color: var(--light-transparent);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 30%;
    border-radius: 12px;
    border-top: 20px solid var(--first-color);
    padding: 30px 20px;

    @media (max-width: 500px) {
        width: 90%;
        height: 50%;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        width: 82%;
        height: 32%;
    }
`

export const TextParagraph = styled.p`
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: 600;

    @media (max-width: 500px) {
        font-size: 16px;
        margin-bottom: 20px;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 22px;
    }
`

// ANALOGIC GRID

export const GridContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(17, 15vw);
    gap: 15px;
`

export const GridPhotoElement = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-column-start: ${props => props.columnStart};
    grid-column-end: ${props => props.columnEnd};
    grid-row-start: ${props => props.rowStart};
    grid-row-end: ${props => props.rowEnd};
`