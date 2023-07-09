import TitleComponent from "Assets/components/Section/components/TitleComponent/TitleComponent"
import { Section } from "Assets/components/Section/styledComponents/styledSection"
import TextOverflow from "./components/TextOverflow"



function ProfesMe() {

    return (
        <Section
            position={2}
            id="professionalmente_me"
        >
            <TitleComponent
                title={"Professionalmente"}
                subtitle={"Me"}
            />
            <TextOverflow />
        </Section>
    )
}

export default ProfesMe