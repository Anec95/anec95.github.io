import { SocialIconContainer, SocialLink, SocialIcon, SocialBtn } from "./styledComponents/styledFooter"
import linkedinIcon from "Assets/images/icons/linkedin.svg"
import githubIcon from "Assets/images/icons/github.svg"
import gmailIcon from "Assets/images/icons/gmail-icon.svg"
import { useLocation } from "react-router"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


function Footer(props) {
    const location = useLocation()

    return (
        <SocialIconContainer>
            <SocialLink
                as={motion(Link)}
                whileHover={{ scale: 1.4 }}
                transition={{ type: 'spring', stiffness: 1000, originX: 0, delay: 0.1 }}
                to="http://linkedin.com/in/thomas-m-a75156202"
                target="_blank"
            >
                <SocialIcon
                    src={linkedinIcon}
                    type={"linkedin"}
                />
            </SocialLink>
            {location.pathname !== "/contacts" &&
                <SocialLink
                    as={motion(Link)}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 1000, originX: 0, delay: 0.1 }}
                    to="/contacts"
                >
                    <SocialIcon
                        src={gmailIcon}
                        type={"gmail"}
                    />
                </SocialLink>
            }
            {location.pathname === "/contacts" &&
                <SocialBtn
                    as={motion.button}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 1000, originX: 0, delay: 0.1 }}
                    onClick={props.editItem}
                >
                    <SocialIcon
                        src={gmailIcon}
                        type={"gmail"}
                    />
                </SocialBtn>
            }
            <SocialLink
                as={motion(Link)}
                whileHover={{ scale: 1.4}}
                transition={{ type: 'spring', stiffness: 1000, originX: 0, delay: 0.1 }}
                to="https://github.com/Anec95"
                target="_blank"
            >
                <SocialIcon
                    src={githubIcon}
                    type={"github"}
                />
            </SocialLink>
            
        </SocialIconContainer>
    )
}

export default Footer