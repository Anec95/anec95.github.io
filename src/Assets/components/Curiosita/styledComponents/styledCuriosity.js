import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledGrid = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    right: 5%;
    top: calc(10% + 180px);
    width: 50%;
    color: #882200;
    height: 60%;
    border: 2px solid var(--scuro);
    border-radius: 12px;

    @media (max-width: 500px) {
        width: 75%;
        padding: 0;
        top: calc(8% + 80px);
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 60%;
        right: 0%;
        padding: 0 90px 0 20px;
    }
`

export const StyledElement = styled(Link)`
    order: ${props => props.order};

    width: 99%;
    height: 200px;
    margin: 5px;
    position: relative;
    background-image: url(${props => props.background_photo});
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    border: 2px solid var(--light-transparent);

    @media (max-width: 500px) {
        width: 98%;
        height: 120px;
        margin: 2px;
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`
export const StyledTitle = styled.h3`
    font-size: 30px;
    color: var(--second-light);
    position: absolute;
    bottom: 10px;
    right: 20px;

    @media (max-width: 500px) {
        
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`