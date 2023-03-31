import { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"

const ComplexBtnContainer = styled.div`
    font-size: 22px;
    font-family: 'Aboreto';
    color: var(--first-color);
    margin-left: 75px;
    margin-top: 20px;

    @media (max-width: 500px) {
        margin-left: 15px;
        margin-top: 10px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        margin-left: 175px;
        margin-top: 20px;
    }
`

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
`

const ComplexBtnName = styled.p`
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

const ExpandIcon = styled.span`
    font-size: 20px;
    padding-top: 4px;
    cursor: pointer;

    &:hover {
        filter: brightness(150%);
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 30px;
    }
`

const ListMenu = styled.div`
    position: absolute;
    width: max-content;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    font-size: 18px;

    @media (max-width: 500px) {
        left: 170px;
        bottom: 10px;
        box-shadow: 2px 2px 10px var(--dark);
        padding: 5px 8px 8px 8px;
        border-radius: 10px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 22px;
        left: 330px;
        bottom: 10px;
        box-shadow: 2px 2px 10px var(--dark);
        padding: 5px 8px 8px 8px;
        border-radius: 10px;
    }
`

const ListElement = styled.p`
    font-variant: small-caps;
    color: var(--first-color);
    margin-top: 10px;

    &:hover {
        filter: brightness(150%);
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`


function ComplexButton(props) {
    const [listShow, setListShow] = useState(false)

    function toggleShowList() {
        setListShow(prevState => !prevState)
    }

    return (
        <ComplexBtnContainer
            as={motion.div}            
            initial={{ x: 800, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: props.delay, duration: 0.5 }}    
        >
            <TitleContainer>
                <ComplexBtnName>{props.btnName}</ComplexBtnName>
                <ExpandIcon
                    onClick={toggleShowList}
                    className="material-icons-outlined"
                >
                    {listShow ? "expand_more" : "navigate_next"}
                </ExpandIcon>   
            </TitleContainer>
           {listShow &&
                <ListMenu>
                    {props.btnList.map(data => {
                            return (
                                <NavLink
                                    style={{textDecoration: "none"}}
                                    to={data.link}
                                    target="_blank"
                                    key={data.id}
                                >
                                    <ListElement
                                        as={motion.p}
                                        whileHover={{ scale: 1.1, color: "var(--first-color)" }}
                                        transition={{ type: 'spring', stiffness: 300, originX: 0 }}
                                    >
                                        {data.name}
                                    </ListElement>
                                </NavLink>
                            )
                        }
                    )}                    
                </ListMenu>
            }
            
        </ComplexBtnContainer>
    )
}



export default ComplexButton