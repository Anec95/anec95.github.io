import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"


export const MenuBtn = styled.button`
    width: max-content;
    height: 30px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-align: left;
    margin-left: 70px;
    margin-top: 20px;

    @media (max-width: 500px) {
        margin-left: 10px;
        margin-top: 10px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        margin-left: 170px;
        margin-top: 20px;
    }
`

const MenuName = styled.p`
    font-family: 'Aboreto';
    font-variant: small-caps;
    font-size: 22px;
    color: var(--first-color);
    padding: 5px;
    font-weight: 700;

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 30px;
    }
`

function LinkButton(props) {
    return (
        <MenuBtn
            as={motion.button}            
            initial={{ x: 800, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: props.delay, duration: 0.5, type: 'spring', stiffness: 80 }}    
        >
            <NavLink
                style={{ textDecoration: 'none' }}
                to={props.btnLink}
            >
                <MenuName
                    as={motion.p}
                    whileHover={{ scale: 1.3, color: "var(--first-color)" }}
                    transition={{ type: 'spring', stiffness: 300, originX: 0 }}
                >
                    {props.btnName}
                </MenuName>
            </NavLink>
        </MenuBtn>
    )
}

export default LinkButton