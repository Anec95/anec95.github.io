import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";


// BODY STYLE

export const AboutMeInfo = styled.div`
    height: 50vh;

    @media (max-width: 500px) {
        height: max-content;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const AboutMeTitle = styled.h1`
    font-size: 50px;
    margin-bottom: 40px;

    @media (max-width: 500px) {
        font-size: 35px;
        margin-bottom: 20px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const AboutMeDescription = styled.p`
    font-size: 18px;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        font-size: 16px;
        margin-bottom: 10px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 20px;
    }
`

export const Start2impactLink = styled(Link)`
    font-variant: small-caps;
    text-decoration: none;
    color: #C98474;

    @media (max-width: 500px) {

    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 22px;
    }
`

// GRID STYLE

export const GridContainer = styled.div`
    height: 50vh;

    @media (max-width: 500px) {
        height: 60vh;
    }
`

export const GridTitle = styled.h3`
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 50px;

    @media (max-width: 500px) {
        font-size: 25px;
        margin-top: 15px;
        margin-bottom: 40px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 35px;
        margin-top: 20px;
        margin-bottom: 35px;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(6, 5vh);
    gap: 12px;
`

export const Element = styled(NavLink)`
    position: relative;
    box-shadow: 2px 2px 20px var(--dark);
    grid-column-start: ${
        props => props.type === "antiquariato" ? 1 :
        props.type === "cucina" ? 3 :
        props.type === "analogic" ? 3 :
        props.type === "natura" ? 6 :
        ""
    };
    grid-column-end: ${
        props => props.type === "antiquariato" ? 3 :
        props.type === "cucina" ? 10 :
        props.type === "analogic" ? 6 :
        props.type === "natura" ? 10 :
        ""
    };
    grid-row-start: ${
        props => props.type === "antiquariato" ? 1 :
        props.type === "cucina" ? 1 :
        props.type === "analogic" ? 4 :
        props.type === "natura" ? 4 :
        ""
    };
    grid-row-end: ${
        props => props.type === "antiquariato" ? 7 :
        props.type === "cucina" ? 4 :
        props.type === "analogic" ? 7 :
        props.type === "natura" ? 7 :
        ""
    };
    border-radius: ${
        props => props.type === "antiquariato" ? "15px 0 0 15px" :
        props.type === "cucina" ? "0 15px 15px 0" :
        props.type === "analogic" ? "0 0 0 0" :
        props.type === "natura" ? "0 0 15px 0" :
        ""
    };

    &:hover {
        z-index: 1;
    }
`

export const ElementImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    border-radius: ${
        props => props.type === "antiquariato" ? "15px 0 0 15px" :
        props.type === "cucina" ? "0 15px 0 0" :
        props.type === "analogic" ? "0 0 0 0" :
        props.type === "natura" ? "0 0 15px 0" :
        ""
    };
`

export const ElementTitle = styled.h3`
    position: absolute;
    font-variant: small-caps;
    bottom: 10px;
    right: 20px;
    color: var(--light);
    text-align: right;

    @media (max-width: 500px) {
        rotate: ${props => props.tight === "yes" ?
            "-90deg" : ""
        };
        bottom: ${props => props.tight === "yes" ?
            "50px" : "5px"
        };
        right: ${props => props.tight === "yes" ?
            "-40px" : "5px"
        };
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        bottom: 10px;
        right: 10px;
        font-size: 18px;
    }
`