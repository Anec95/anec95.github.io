import TextComponent from "Assets/components/Section/components/TextComponent/TextComponent"
import TitleComponent from "Assets/components/Section/components/TitleComponent/TitleComponent"
import { Section } from "Assets/components/Section/styledComponents/styledSection"



function Curiosita() {
    const text = `Al momento la sezione è in allestimento.`
    const text2 = ``
    return (
        <Section
            position={5}
            id="curiosita"
        >
            <TitleComponent
                title={"Curiosità"}
            />
            <TextComponent
                text={text}
                text2={text2}
            />
        </Section>
    )
}

export default Curiosita