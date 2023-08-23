import LayoutSP from "./LayoutSP/LayoutSP"
import AboutMe from "Assets/components/AboutMe/AboutMe"
import ProfesMe from "Assets/components/ProfesMe/ProfesMe"
import { useState } from "react"
import Portfolio from "Assets/components/Portfolio/Portfolio"
import Template from "Assets/components/Template/Template"
import Curiosita from "Assets/components/Curiosita/Curiosita"
import Contattami from "Assets/components/Contattami/Contattami"


function HomeSmartphone(props) {
    const sectionArray = [
        <AboutMe innerWidth={props.innerWidth} />,
        <ProfesMe />,
        <Portfolio />,
        <Template />,
        <Curiosita />,
        <Contattami />
    ]
    const [idxSection, setIdxSection] = useState(0)

    const handleIdxPlus = () => {
        if(idxSection >= sectionArray.length - 1) {
            setIdxSection(oldValue => oldValue = 0)
        } else {
            setIdxSection(oldValue => oldValue + 1)
        }
    }

    const handleIdxMinus = () => {
        if(idxSection <= 0) {
            setIdxSection(oldValue => oldValue = sectionArray.length -1 )
        } else {
            setIdxSection(oldValue => oldValue -1)
        }}


    return (
        <>
            <LayoutSP
                handleIdxPlus={handleIdxPlus}
                handleIdxMinus={handleIdxMinus}
                idxSection={idxSection}
                length={sectionArray.length}
            />
            {sectionArray[idxSection]}
        </>
    )
}

export default HomeSmartphone