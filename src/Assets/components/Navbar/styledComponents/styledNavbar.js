import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
    position: fixed;
    width: max-content;
    height: max-content;
    left: 5%;
    top: 35%;
    display: flex;
    flex-direction: column;
    z-index: 10;

    @media (max-width: 500px) {
        top: 20%;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        top: 25%;
    }
`

// ICON CONTAINER
export const IconsContainer = styled.div`
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledIcon = styled.a`
    font-size: 40px;
    color: var(--scuro);
    text-decoration: none;
    ${props =>
        props.type === "to_the_top" ?
        {
            fontSize: "50px",
            alignSelf: "flex-end"
        } :
        ""
    }

    @media (max-width: 500px) {
        ${props =>
            props.type === "to_the_top" ?
            {
                fontSize: "35px",
                alignSelf: "flex-end",
                backgroundColor: "var(--light)",
                borderRadius: "50%"
            } :
            ""
        }
    }
`

// MENU CONTAINER
export const MenuContainer = styled.nav`
    flex: 1;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        background-color: var(--light-transparent);
        border: 1px solid var(--scuro);
        border-radius: 8px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const NavElement = styled.a`
    font-size: 24px;
    font-weight: 600;
    padding: 10px;
    cursor: pointer;
    font-family: 'Aboreto';
    font-variant: small-caps;
    text-decoration: ${props =>
        props.underline === true ? "underline" : "none"
    };
    color: var(--scuro);
`

export const SocialIconContainer = styled.div`
    display: flex;
    padding: 10px;
`

export const SocialLink = styled(Link)`
    text-decoration: none;
`

export const SocialIcon = styled.img`
    width: 22px;
    padding: 0 6px;
`


// TO THE TOP
export const ToTheTopContainer = styled.div`
    box-sizing: border-box;
    padding: 1px 4px;
    width: 40px;
    height: 40px;
    cursor: pointer;
`
