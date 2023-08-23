import TextComponent from "Assets/components/Section/components/TextComponent/TextComponent"
import TitleComponent from "Assets/components/Section/components/TitleComponent/TitleComponent"
import { Section } from "Assets/components/Section/styledComponents/styledSection"


function AboutMe(props) {
    const title = "About Me"
    const text = `Vivo secondo natura e amo osservare; è così che dò vita ai miei progetti.
        Lasciandomi ispirare da ciò che mi circonda e seguendo il mio istinto.`
    const text2 = `Nella vita privata, i miei più grandi interessi sono l'antiquariato - che
        coltivo andando a ricercare oggetti curiosi e unici nei più grandi mercatini e mercati
        d'Italia -, la fotografia - esclusivamente analogica, perché l'unicità dello scatto
        rimanga pura e inviolata - e la natura - amo stare immerso nella natura a contemplarla,
        ascoltando... e meditando senza pensieri.`
    const text3 = `Durante le esperienze che ho affrontato nella vita, ho compreso che se non
        si vuole rimanere fermi e statici c'è bisogno di flessibilità e tenacia, oltre a una
        buona dose di volontà. Perché, come recita la mia frase preferita: “Chi vuol muovere
        il mondo, prima muova sé stesso!” --Socrate`

    return (
        <Section
            position={1}
        >
            <TitleComponent
                logo={true}
                innerWidth={props.innerWidth}
            />
            <TextComponent
                aboutMe={true}
                title={title}
                text={text}
                text2={text2}
                text3={text3}
            />
        </Section>
    )
}

export default AboutMe