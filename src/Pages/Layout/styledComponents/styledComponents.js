import styled from "styled-components"
import { NavLink } from "react-router-dom"


export const DragContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 0;

    @media (max-width: 500px) {
        width: 100vw;
        height: 100vh;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const MenuContainer = styled.div`
    position: fixed;
    bottom: 50px;
    left: 50px;
    display: flex;
    flex-direction: column;
    z-index: 10;

    @media (max-width: 500px) {
        top: 20px;
        left: 90vw;
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const MenuShowed = styled.div`
    background-color: var(--light);
    border: 2px solid var(--first-color);
    border-radius: 10px;
    margin-bottom: 20px;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    box-shadow: 4px 4px 10px #380D1A;
    padding: 5px;
    position: absolute;
    bottom: 20px;

    @media (max-width: 500px) {
        z-index: 10;
        bottom: 45vh;
        right: 0px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const DragIndicator = styled.span`
    font-size: 30px;
    color: var(--first-color);
    position: absolute;
    top: 3px;
    right: 0px;
`

export const MenuIcon = styled.span`
    color: ${props => props.pathname === "yes" ? "var(--light)" : "var(--first-color)"};
    font-size: 30px;
    cursor: pointer;

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 40px;
    }
`

export const MenuElement = styled(NavLink)`
    width: max-content;
    text-decoration: ${props =>  props.location === "yes" ? "underline" : "none"};
    font-size: 20px;
    font-family: 'Aboreto';
    font-weight: 600;
    margin: 10px 20px;
    color: var(--first-color);

    &:hover {
        filter: brightness(150%);
    }

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const HomeLinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const ControlIcon = styled(NavLink)`
    text-decoration: none;
    font-size: ${props => props.home ? "25px" : "23px"};
    font-weight: 600;
    margin: ${props => props.home ? "10px 0" : "12px 0"} ;
    margin-right: ${props => props.home ? "40px" : "10px"};
    color: var(--first-color);
    cursor: pointer;
    
    &:hover {
        filter: brightness(150%);
    }

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`