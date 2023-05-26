import styled from "styled-components";

export const TattooShopMain = styled.main`
    position: relative;
    width: 100vw;
    height: 100vh;
    /* background-color: #0F0E0E; */
    background-color: rgba(32, 32, 32, 1);

    @media (max-width: 500px) {
        overflow: hidden;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        overflow: hidden;

    } 
`

// IMG SECTION
export const ImgsContainer = styled.div`
    position: fixed;
    right: 100px;
    top: 15%;
    width: 60%;
    height: 70%;

    @media (max-width: 500px) {
        top: 30%;
        right: -10%;
    }

    @media (min-width: 501px) and (max-width: 1000px) {

    } 
`

export const TattooImg = styled.img`
    position: absolute;
    border: 2px solid var(--light-transparent);
    border-radius: 15px;
    box-shadow: 0px 0px 10px 10px rgba(1, 1, 1, 1);
    top: ${ props =>
        props.nImg === 1 ? "15%" :
        props.nImg === 2 ? "6%" :
        props.nImg === 3 ? "2%" :
        props.nImg === 4 ? "45%" :
        props.nImg === 5 ? "55%" :
        props.nImg === 6 ? "30%" :
        {}
    };
    left: ${ props =>
        props.nImg === 1 ? "35%" :
        props.nImg === 2 ? "18%" :
        props.nImg === 3 ? "52%" :
        props.nImg === 4 ? "12%" :
        props.nImg === 5 ? "14%" :
        props.nImg === 6 ? "55%" :
        {}
    };
    width: ${ props =>
        props.nImg === 1 ? "30%" :
        props.nImg === 2 ? "22%" :
        props.nImg === 3 ? "22%" :
        props.nImg === 4 ? "25%" :
        props.nImg === 5 ? "40%" :
        props.nImg === 6 ? "45%" :
        {}
    };
    height: ${ props =>
        props.nImg === 1 ? "70%" :
        props.nImg === 2 ? "55%" :
        props.nImg === 3 ? "55%" :
        props.nImg === 4 ? "30%" :
        props.nImg === 5 ? "46%" :
        props.nImg === 6 ? "65%" :
        {}
    };
    z-index: ${ props =>
        props.nImg === 1 ? 3 :
        props.nImg === 2 ? 1 :
        props.nImg === 3 ? 2 :
        props.nImg === 4 ? 2 :
        props.nImg === 5 ? 1 :
        props.nImg === 6 ? 1 :
        {}
    };
    object-fit: cover;
    object-position: ${ props =>
        props.nImg === 3 ? "-50px" :
        props.nImg === 4 ? "0 -210px" :
        {}
    };

    @media (max-width: 500px) {
        ${
            props => props.nImg === 4 ? 
            {display: "none"} :
            {}
        }
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        ${
            props => props.nImg === 4 ? 
            {display: "none"} :
            {}
        }
    } 
`

export const TitleTattoo = styled.h1`
    position: absolute;
    top: 35%;
    left: 50%;
    z-index: 7;
    transform: translateX(-50%);
    text-align: center;
    width: max-content;
    padding: 10px 20px;
    border-radius: 30%;
    font-family: 'Neonderthaw';
    font-size: 180px;
    text-shadow: 0 0 15px #F97B22;
    color: #F97B22;
    filter: brightness(110%);
    text-shadow: 0 0 40px palegreen;
    /* text-shadow: 0 0 40px palevioletred; */

    @media (max-width: 500px) {
        font-size: 60px;
        /* word-wrap: break-word; */
        width: 50%;
        transform: translateX(-75%);
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 150px;
    } 
`

// NAVBAR
export const NavContainer = styled.div`
    position: absolute;
    left: 0;
    width: 22%;
    height: 100vh;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    padding-top: 10%;

    @media (max-width: 500px) {
        width: 50%;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 40%;
    } 
`

export const MenuElement = styled.div`
    background-color: var(--light-transparent);
    cursor: pointer;
    margin: 5px 0;
    width:${ props =>
        props.nCont === 1 ? "94%" :
        props.nCont === 2 ? "90%" :
        props.nCont === 3 ? "98%" :
        props.nCont === 4 ? "78%" :
        ""
    };
`

export const NavTitle = styled.h2`
    width: 95%;
    text-align: right;
    color: rgba(32, 32, 32, 1);
    font-size: 20px;
    padding-top: 3px;
`

// INFO DIV
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