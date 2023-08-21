import TitleComponent from "Assets/components/Section/components/TitleComponent/TitleComponent"
import { Section } from "Assets/components/Section/styledComponents/styledSection"
import CuriositiesGrid from "./components/CuriositiesGrid/CuriositiesGrid"



function Curiosita() {
    return (
        <Section
            position={5}
            id="curiosita"
        >
            <TitleComponent
                title={"Curiosità"}
            />
            <CuriositiesGrid></CuriositiesGrid>
             
        </Section>
    )
}

export default Curiosita