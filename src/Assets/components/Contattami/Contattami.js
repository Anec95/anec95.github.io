import TitleComponent from "Assets/components/Section/components/TitleComponent/TitleComponent"
import { Section } from "Assets/components/Section/styledComponents/styledSection"
import EmailForm from "./components/EmailForm"



function Contattami() {
    
    return (
        <Section
            position={6}
            id="contattami"
        >
            <TitleComponent
                title={"Contattami"}
            />
            <EmailForm />
        </Section>
    )
}

export default Contattami