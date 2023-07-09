import { Section } from "Assets/components/Section/styledComponents/styledSection"
import TitleComponent from "Assets/components/Section/components/TitleComponent/TitleComponent"
import TextComponent from "Assets/components/Section/components/TextComponent/TextComponent"
import CarouselComponent from "Assets/components/Section/components/CarouselComponent/CarouselComponent"


function Portfolio() {
    const text = `Questa sezione è dedicata ai progetti che ho realizzato a partire da agosto 2022 ad oggi.`
    const text2 = `I primi esposti sono quelli più recenti, mentre man mano che si scorre a destra si va verso i primi realizzati.`

    return (
        <Section
            position={3}
            id="portfolio"
        >
            <TitleComponent
                title={"Portfolio"}
            />
            <TextComponent
                text={text}
                text2={text2}
            />
            <CarouselComponent
                type={"portfolio"}
            />
        </Section>
    )
}

export default Portfolio