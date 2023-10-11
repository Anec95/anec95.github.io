import { Link } from "react-router-dom";
import styled from "styled-components";
import aboutMeHeader from "Assets/images/header_photo/versailles-gardens-2022-_pcvs_.png"
import portfolioHeader from "Assets/images/header_photo/header_ph-markus-spiske.jpg"
import hobbyHeader from "Assets/images/header_photo/header_ph-suzy-hazelwood.jpg"
import contactHeader from "Assets/images/header_photo/contacts.jpg"


export const Header = styled.header`
    position: fixed;
    width: 100vw;
    height: 150px;
    z-index: 10;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: ${props =>
        props.pathname !== "/" && "0px 20px 30px var(--text_black)"
    };
    background-color: ${props =>
        (props.pathname !== "/") && "var(--background)"
    };
    
    ${props =>
        props.pathname === "/aboutme" ? {
            backgroundImage: `url(${aboutMeHeader})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backdropFilter: "opacity(20%)"
        } :
        props.pathname.includes("/portfolio") ? {
            backgroundImage: `url(${portfolioHeader})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        } :
        props.pathname.includes("/hobby") ? {
            backgroundImage: `url(${hobbyHeader})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        } :
        props.pathname === "/contacts" ? {
            backgroundImage: `url(${contactHeader})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
        } :
        ""
    };
    
    @media (max-width: 500px) {
        height: 100px;
        justify-content: flex-start;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        justify-content: flex-start;
    }
`

export const LinkNavbar = styled(Link)`
    color: ${ props =>
        props.pathname !== "/" ? "#E9E8E3" :
        "var(--title-color)"
    };
    font-family: 'Aboreto';
    margin-right: 60px;
    font-size: 20px;

    &:hover{
        font-weight: 900;
    }
    
    @media (max-width: 500px) {
        font-size: 12px;
        margin-right: 0px;
        margin-left: 12px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        margin-right: 0px;
        margin-left: 30px;
    }
`

export const StyledIcon = styled.span`
    font-size: 35px;
    
    @media (max-width: 500px) {
        font-size: 25px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const StyledBackIcon = styled.span`
    font-size: 32px;
    padding: 0 10px 5px 0;
    color: #E9E8E3;
    cursor: pointer;
    
    @media (max-width: 500px) {
        font-size: 22px;
        padding: 0;
        margin-right: -10px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 30px;
        padding: 0;
        margin-right: -20px;
        margin-left: 40px;
    }
`