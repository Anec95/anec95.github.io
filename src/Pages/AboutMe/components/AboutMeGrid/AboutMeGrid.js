import { GridContainer, GridTitle, Grid } from "Pages/AboutMe/styledComponents/styledComponents"
import GridElement from "./components/GridElement"
import { motion } from "framer-motion"

import AntiqueImg from "Assets/images/antique.jpg"
import CookingImg from "Assets/images/cooking-index.jpg"
import AnalogiImg from "Assets/images/analogic.jpg"
import NatureImg from "Assets/images/nature.jpg"


function AboutMeGrid() {
    return (
        <GridContainer>
            <GridTitle
                as={motion.h3}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                Interessi Personali
            </GridTitle>
            <Grid>
                <GridElement
                    type={"antiquariato"}
                    tight={'yes'}
                    linkSidePage={"/about_me/antique"}
                    src={AntiqueImg}
                    elementTitle={"Antiquariato"}
                    delayAppear={0.7}
                />
                <GridElement
                    type={"cucina"}
                    linkSidePage={"/about_me/cooking"}
                    src={CookingImg}
                    elementTitle={"Cucina"}
                    delayAppear={0.8}
                />
                <GridElement
                    type={"analogic"}
                    linkSidePage={"/about_me/analogic_photography"}
                    src={AnalogiImg}
                    elementTitle={"Fotografia Analogica"}
                    delayAppear={0.9}
                />
                <GridElement
                    type={"natura"}
                    linkSidePage={"/about_me/nature"}
                    src={NatureImg}
                    elementTitle={"Natura"}
                    delayAppear={1}
                />
            </Grid>
        </GridContainer>
    )
}

export default AboutMeGrid