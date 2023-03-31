import styled from "styled-components"

export const TemplateNav = styled.nav`
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 250px;
    height: 80px;
    border-radius: 40px;
    background-color: var(--light-transparent);
    box-shadow: 2px 5px 15px var(--dark);
    z-index: 10;
    box-shadow: 0px 0px 10px var(--dark);

    display: flex;
    align-items: center;
    justify-content: center;
`


// BUTTON

export const ButtonArrow = styled.button`
    background-color: transparent;
    border: none;
    color: var(--first-color);
    font-size: 80px;
    cursor: pointer;
`

export const AppsBtn = styled.button`
    font-size: 50px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: var(--first-color);
`