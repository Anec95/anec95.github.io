import {
    DevelopContainer,
    DevelopLink,
    DevelopSvg,
    DevelopText,
    SkillContainer,
    SkillTitle  } from "Refactoring/AboutMe/styledComponents/styledAboutMe"
import react_logo from "Assets/images/icons/react.svg"
import html5_logo from "Assets/images/icons/html5.svg"
import css_logo from "Assets/images/icons/css3.svg"
import javascript_logo from "Assets/images/icons/javascript.svg"
import framer_motion_logo from "Assets/images/icons/framer-motion.svg"
import styled_components_logo from "Assets/images/icons/styled-components.svg"
import react_router_logo from "Assets/images/icons/react-router-mark-color.svg"
import redux_logo from "Assets/images/icons/redux.svg"
import material_UI_logo from "Assets/images/icons/material-ui.svg"
import primereact_logo from "Assets/images/icons/primereact.svg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


function Skill() {
    return (
        <SkillContainer>
            <SkillTitle>Linguaggi conosciuti</SkillTitle>
            <DevelopContainer>
                <DevelopLink
                    as={motion(Link)}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                    to="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                    target="_blank"
                >
                    <DevelopSvg src={html5_logo} />
                    <DevelopText>
                        HTML5
                    </DevelopText>
                </DevelopLink>
                <DevelopLink
                    as={motion(Link)}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                    to="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                >
                    <DevelopSvg src={css_logo} />
                    <DevelopText>
                        CSS
                    </DevelopText>
                </DevelopLink>
                <DevelopLink
                    as={motion(Link)}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                    to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                >
                    <DevelopSvg src={javascript_logo} />
                    <DevelopText
                        type={"small-caps"}
                    >
                        JavaScript
                    </DevelopText>
                </DevelopLink>
            </DevelopContainer>

            <SkillTitle>
                Framework utilizzati
            </SkillTitle>
            <DevelopContainer>
                <DevelopLink
                    as={motion(Link)}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                    to="https://legacy.reactjs.org/docs/getting-started.html"
                    target="_blank"
                >
                    <DevelopSvg
                        size={"small"}
                        src={react_logo}
                    />
                    <DevelopText>
                        REACT
                    </DevelopText>
                </DevelopLink>
                <DevelopLink
                    as={motion(Link)}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                    to="https://reactrouter.com/en/main"
                    target="_blank"
                >
                    <DevelopSvg
                        size={"small"}
                        src={react_router_logo}
                    />
                    <DevelopText type={"small-caps"}>
                        React Router
                    </DevelopText>
                </DevelopLink>
                <DevelopLink
                    as={motion(Link)}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                    to="https://styled-components.com/docs"
                    target="_blank"
                >
                    <DevelopSvg src={styled_components_logo} />
                    <DevelopText
                        type={"small-caps"}
                    >
                        Styled Components
                    </DevelopText>
                </DevelopLink>
                <DevelopLink
                    as={motion(Link)}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                    to="https://www.framer.com/motion/"
                    target="_blank"
                >
                    <DevelopSvg src={framer_motion_logo} />
                    <DevelopText
                        type={"small-caps"}
                    >
                        Framer Motion
                    </DevelopText>
                </DevelopLink>
                <DevelopLink
                    as={motion(Link)}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                    to="https://redux.js.org/"
                    target="_blank"
                >
                    <DevelopSvg src={redux_logo} />
                    <DevelopText
                        type={"small-caps"}
                    >
                        Redux
                    </DevelopText>
                </DevelopLink>
                <DevelopLink
                    as={motion(Link)}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                    to="https://mui.com/"
                    target="_blank"
                >
                    <DevelopSvg src={material_UI_logo} />
                    <DevelopText
                        type={"small-caps"}
                    >
                        Material-Ui
                    </DevelopText>
                </DevelopLink>
                <DevelopLink
                    as={motion(Link)}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                    to="https://mui.com/"
                    target="_blank"
                >
                    <DevelopSvg src={primereact_logo} />
                    <DevelopText
                        type={"small-caps"}
                    >
                        PrimeReact
                    </DevelopText>
                </DevelopLink>
            </DevelopContainer>
        </SkillContainer>
    )
}

export default Skill