import { motion } from "framer-motion"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { LinkNavbar,StyledIcon, StyledBackIcon } from "../styledComponents/styledNavbar"


function LinkBox() {
    const location = useLocation()
    const navigate = useNavigate();

    return (        
        <>
            <LinkNavbar
                as={motion(Link)}
                whileHover={{ scale: 1.4 }}
                transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                to={"/aboutme"}
                pathname={location.pathname}
            >
                About Me
            </LinkNavbar>
            <LinkNavbar
                as={motion(Link)}
                whileHover={{ scale: 1.4 }}
                transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                to={"/portfolio"}
                pathname={location.pathname}
            >
                Portfolio
            </LinkNavbar>
            <LinkNavbar
                as={motion(Link)}
                whileHover={{ scale: 1.4 }}
                transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                to={"/hobby"}
                pathname={location.pathname}
            >
                Interessi
            </LinkNavbar>
            <LinkNavbar
                as={motion(Link)}
                whileHover={{ scale: 1.4 }}
                transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                to={"/contacts"}
                pathname={location.pathname}
            >
                Contattami            
            </LinkNavbar>

            {(location.pathname.includes("/portfolio/") || location.pathname.includes("/hobby/")) &&
                <StyledBackIcon
                    as={motion.span}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                    className="material-icons-outlined"
                    pathname={location.pathname}
                    onClick={() => navigate(-1)}
                >
                    arrow_back_ios
                </StyledBackIcon>
            }
            {location.pathname !== "/" &&
                <LinkNavbar
                    as={motion(Link)}
                    whileHover={{ scale: 1.4 }}
                    transition={{ type: 'spring', stiffness: 200, originX: 0 }}
                    to={"/"}
                    pathname={location.pathname}
                    type={"home"}
                >
                    <StyledIcon
                        className="material-icons-outlined"
                    >
                        home
                    </StyledIcon>  
                </LinkNavbar>
            }    
        </>        
    )
}

export default LinkBox