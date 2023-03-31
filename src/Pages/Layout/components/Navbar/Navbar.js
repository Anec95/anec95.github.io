import { useState, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { DragContainer, MenuContainer, MenuShowed, MenuIcon, MenuElement, HomeLinkContainer, ControlIcon, DragIndicator } from "Pages/Layout/styledComponents/styledComponents"


// const containerVariants = {
//     hidden: {
//         opacity: 0
//     },
//     visible: {
//         opacity: 1
//     }
// }

function Navbar() {
    const [show, setShow] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const constraintsRef = useRef(null)

    function handleShowMenu() {
        setShow(oldValue => !oldValue)
    }

    function handleBack() {
        navigate(-1)
    }

    return (
        <DragContainer
            as={motion.div}
            ref={constraintsRef}
        >
            <MenuContainer>
                {show && (<MenuShowed
                    as={motion.div}
                    drag
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    dragConstraints={constraintsRef}
                >
                    <DragIndicator className="material-icons-outlined">
                        drag_indicator
                    </DragIndicator>
                    <MenuElement
                        to="/about_me"
                        location={location.pathname === "/about_me" ? "yes" : "no"}
                    >
                        About Me
                    </MenuElement>
                    <MenuElement
                        to="/professionalmente_me"
                        location={location.pathname === "/professionalmente_me" ? "yes" : "no"}
                    >
                        Professionalmente Me
                    </MenuElement>
                    <MenuElement
                        to="/portfolio"
                        location={location.pathname === "/portfolio" ? "yes" : "no"}
                    >
                        Portfolio
                    </MenuElement>
                    <MenuElement
                        to="/template"
                        location={location.pathname === "/template" ? "yes" : "no"}
                    >
                        Template
                    </MenuElement>
                    <HomeLinkContainer>
                        <ControlIcon
                            className="material-icons-outlined"
                            home={false}
                            onClick={handleBack}
                        >
                            arrow_back_ios
                        </ControlIcon>
                        <ControlIcon
                            to="/"
                            className="material-icons-outlined"
                            home={true}
                        >
                            roofing
                        </ControlIcon>
                    </HomeLinkContainer>                
                </MenuShowed>)}
                <MenuIcon
                    pathname={
                        location.pathname === ("/about_me/antique") ? "yes" :
                        location.pathname === ("/about_me/cooking") ? "yes" :
                        location.pathname === ("/about_me/nature") ? "yes" :
                        "no"
                    }
                    as={motion.span}
                    className="material-icons-outlined"
                    onClick={handleShowMenu}
                >
                    {show ? "menu_open" : "menu"}
                </MenuIcon>
            </MenuContainer>
        </DragContainer>
    )
}

export default Navbar