import styled from "styled-components"
import { Link } from "react-router-dom"

export const SocialIconContainer = styled.div`
    height: 40px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 40px;
    bottom: 20px;
    z-index: 10;
    
    @media (max-width: 500px) {
        height: 0px;
        right: 10px;
        bottom: 20px;
        margin: 10px 0;
    }

    @media (min-width: 501px) and (max-width: 1000px) {

    }
`

export const SocialLink = styled(Link)`
    text-decoration: none;
`

export const SocialBtn = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
`

export const SocialIcon = styled.img`
    height: ${props=>
        props.type === "linkedin" ? "50px" :
        props.type === "github" ? "52px" :
        props.type === "gmail" ? "40px" :
        ""
    };
    border-radius: ${ props =>
        props.type === "github" ? "50%" :
        props.type === "gmail" ? "10%" :
        props.type === "linkedin" ? "5px" :
        ""
    };
    object-fit: cover;
    box-shadow: 4px 4px 10px var(--text_black);
    margin: 0 10px;
    
    @media (max-width: 500px) {
        height: ${props=>
            props.type === "linkedin" ? "30px" :
            props.type === "github" ? "32px" :
            props.type === "gmail" ? "25px" :
            ""
        };
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`