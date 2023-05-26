import InfoBtn from "./components/InfoBtn"
import NavBarTattoo from "./components/Navbar"
import TattooImgSection from "./components/TattooImgSection"
import { TattooShopMain, TitleTattoo } from "./styledComponents/styledTattooStorefrontSite"
import { motion } from "framer-motion"



function TattooStorefrontSite() {
    return (
        <TattooShopMain>
            <InfoBtn />
            <NavBarTattoo />
            <TitleTattoo
                as={motion.h1}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                Tattoo Shop
            </TitleTattoo>
            <TattooImgSection />
        </TattooShopMain>
    )
}

export default TattooStorefrontSite