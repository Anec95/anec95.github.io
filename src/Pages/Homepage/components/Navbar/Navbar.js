import { motion } from "framer-motion"
import LinkButton from "./components/Button"
import ComplexButton from "./components/ComplexBtn"
import { NavbarContaiener, Title, Subtitle, Separe } from "./styledComponents/styledComponents"


function Navbar() {
    return (
        <NavbarContaiener>
            <Title
                as={motion.h1}
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
            >
                Thomas Miori
            </Title>
            <Subtitle
                as={motion.h2}
                initial={{ y: -600 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5 }}
            >
                Web Developer
            </Subtitle>
            <Separe />
            <LinkButton                
                btnLink={"/about_me"}
                btnName={"About Me"}
                delay={0.2}
            />
            <LinkButton
                btnLink={"/professionalmente_me"}
                btnName={"Professionalmente Me"}
                delay={0.4}
            />
            <LinkButton
                btnLink={"/portfolio"}
                btnName={"Portfolio"}
                delay={0.6}
            />
            <LinkButton
                btnLink={"/template"}
                btnName={"Template"}
                delay={0.8}
            />
            <ComplexButton
                btnName={"Contatti"}
                delay={1}
                btnList={[
                    {
                        name: "Github",
                        id: 1,
                        link: "https://github.com/Anec95"
                    },
                    {
                        name: "Mail",
                        id: 2,
                        link: "mailto: miori.thomas95@gmail.com"
                    },                    
                    {
                        name: "LinkedIn",
                        id: 3,
                        link: "https://www.linkedin.com/in/thomas-m-a75156202"
                    }
                ]}
            />
        </NavbarContaiener>
    )
}

export default Navbar