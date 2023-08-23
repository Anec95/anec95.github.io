import CarouselComponent from "Assets/components/Section/components/CarouselComponent/CarouselComponent"
import TextComponent from "Assets/components/Section/components/TextComponent/TextComponent"
import TitleComponent from "Assets/components/Section/components/TitleComponent/TitleComponent"
import { Section } from "Assets/components/Section/styledComponents/styledSection"



function Template() {
    // const text = `Questa è la sezione dedicata all'esposizione dei Template da me prodotti.`
    // const text2 = `Si tratta di esempi di possibili homepage di siti che possono essere realizzati su
    //                 richiesta e collaborazione.`

    const text = "Al momento la sezione Template è in via di sviluppo."

    return (
        <Section
            position={4}
            id="template"
        >
            <TitleComponent
                title={"Template"}
            />
            <TextComponent
                text={text}
            />
            <CarouselComponent
                type={"template"}
            />
        </Section>
    )
}

export default Template