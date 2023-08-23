import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCard = styled.div`
    background-color: #E4DBE6;
    width: 320px;
    height: 380px;
    border-radius: 12px;
    box-shadow: 2px 2px 10px var(--scuro);
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        height: 295px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 340px;
        height: 450px;
    }
`

export const ClipProject = styled.video`
    width: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    @media (max-width: 500px) {
        height: 150px;
        margin-bottom: 5px;
    }
`

export const InfoProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;

    @media (max-width: 500px) {
        padding: 10px;
        overflow-y: scroll;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const ProjectTitle = styled.h3`
    font-family: 'Aboreto';
    color: var(--first-color);
    padding: 6px;

    @media (max-width: 500px) {
        font-size: 18px;
        padding: 3px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const ProjectDescription = styled.p`
    white-space: pre-line;
    font-size: 16px;
    padding: 6px;
    letter-spacing: 1px;

    @media (max-width: 500px) {
        font-size: 14px;
        margin-bottom: 5px;
        height: 40px;
        overflow-y: scroll;

        ::-webkit-scrollbar {
            height: 5px;
            width: 5px;
            display: block;
            background: var(--light-invisible);
        }

        ::-webkit-scrollbar-thumb {
            -webkit-border-radius: 1ex;
            display: block;
            background: #882200;
        }

        ::-webkit-scrollbar-corner {
            display: block;
        }
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const ProjectLink = styled(Link)`
    font-family: 'Roboto';
    text-decoration: none;
    color: var(--first-color);
    padding: 0 6px;
    font-size: 18px;
    font-weight: 600;
    font-variant: small-caps;
    margin-bottom: 5px;

    @media (max-width: 500px) {
        font-size: 16px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`