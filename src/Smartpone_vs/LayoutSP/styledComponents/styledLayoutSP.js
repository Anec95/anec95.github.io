import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    background-color: #E9D2D9;
    box-sizing: border-box;
    padding-top: 30px;
    z-index: 10;
`

export const StyledImg = styled.img`
    object-fit: cover;
    object-position: center;
    width: 400px;
    
`

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 20px;
    left: 50%;
    margin-left: -60px;
    width: 130px;
    height: 40px;
    background-color: #E9D2D9;
    border-radius: 30px;
    z-index: 10;
`

export const StyledArrow = styled.button`
    border: none;
    background-color: transparent;
    font-size: 28px;
`

export const StyledTextIndex = styled.h3`
    font-size: 14px;
    width: max-content;
    font-family: 'Roboto';
    padding: 2px 4px;
`