import { AnimatePresence } from "framer-motion"
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom"
import Template from "Pages/Template/Template";
import Layout from "Pages/Layout/Layout";
import Portfolio from "Pages/Portfolio/Portfolio";
import ProfessionalmenteMe from "Pages/ProfessionalmenteMe/ProfessionalmenteMe";
import AboutMe from "Pages/AboutMe/AboutMe";
import Homepage from "Pages/Homepage/Homepage";
import Antique from "Pages/AboutMeSidePage/Antique/Antique";
import Cooking from "Pages/AboutMeSidePage/Cooking/Cooking";
import Analogic from "Pages/AboutMeSidePage/Analogic/Analogic";
import Nature from "Pages/AboutMeSidePage/Nature/Nature";
import TemplateLayout from "Pages/TemplateLayout/TemplateLayout";
import EscapeRoom from "Pages/TemplateSidePage/EscapeRoom/EscapeRoom";
import TemplateCard from "Pages/Template/components/TemplateCarousel/components/TemplateCard";
import { dataCardTemplates } from "Data/dataCardTemplates";


function AnimetedRoutes() {
    const location = useLocation()
    const cardTemplateElement = dataCardTemplates.map(data => {
        return <TemplateCard key={data.id} {...data}/>
    })

    const [templateIndex, setTemplateIndex] = useState(0)

    function indexPlus() {
        if (templateIndex === cardTemplateElement.length - 1) {
            setTemplateIndex(0)
        } else {
            setTemplateIndex(oldValue => oldValue + 1)
        }
    }

    function indexMinus() {
        if (templateIndex > 0) {
            setTemplateIndex(oldValue => oldValue - 1)
        }
    }

    console.log(templateIndex)

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Homepage />} />
                <Route element={<Layout />}>
                    <Route path='/about_me' element={<AboutMe />} />
                    <Route path="/about_me/antique" element={<Antique />} />
                    <Route path="/about_me/analogic_photography" element={<Analogic />} />
                    <Route path="/about_me/cooking" element={<Cooking />} />
                    <Route path="/about_me/nature" element={<Nature />} />
                    <Route path='/professionalmente_me' element={<ProfessionalmenteMe />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/template' element={<Template
                        index={templateIndex}
                        cardTemplateElement={cardTemplateElement}
                        functionPlus={indexPlus}
                        functionMinus={indexMinus}
                    />} />
                    <Route element={<TemplateLayout
                        index={templateIndex}
                        functionPlus={indexPlus}
                        functionMinus={indexMinus}
                    />}>
                        <Route path='/template/escape_room' element={<EscapeRoom />} />
                        <Route path='/template/girl' element={<Cooking />} />
                    </Route>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimetedRoutes