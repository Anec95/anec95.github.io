import { TattooImg, ImgsContainer } from "../styledComponents/styledTattooStorefrontSite"
import frontImg from "Assets/images/photo-template/tattoo_shop/pexels-adrian-boustead-955938.jpg"
import leftTopImg from "Assets/images/photo-template/tattoo_shop/pexels-brett-sayles-2231633.jpg"
import rightTopImg from "Assets/images/photo-template/tattoo_shop/pexels-cottonbro-studio-5320030.jpg"
import leftBottomImg from "Assets/images/photo-template/tattoo_shop/pexels-dominika-roseclay-2106700.jpg"
import centerBottomImg from "Assets/images/photo-template/tattoo_shop/pexels-karolina-grabowska-5202393.jpg"
import rightBottomImg from "Assets/images/photo-template/tattoo_shop/pexels-kevin-bidwell-2183132.jpg"
import { motion } from "framer-motion"


function TattooImgSection() {
    return (
        <ImgsContainer>
            <TattooImg
                as={motion.img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                nImg={1}
                src={frontImg}
                alt='tattoo'
            />
            <TattooImg
                as={motion.img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                nImg={2}
                src={leftTopImg}
                alt='tattoo'
            />
            <TattooImg
                as={motion.img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                nImg={3}
                src={rightTopImg}
                alt='tattoo'
            />
            <TattooImg
                as={motion.img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                nImg={4}
                src={leftBottomImg}
                alt='tattoo'
            />
            <TattooImg
                as={motion.img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                nImg={5}
                src={centerBottomImg}
                alt='tattoo'
            />
            <TattooImg
                as={motion.img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                nImg={6}
                src={rightBottomImg}
                alt='tattoo'
            />
        </ImgsContainer>
    )
}

export default TattooImgSection