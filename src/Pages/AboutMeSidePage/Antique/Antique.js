import BodySidePageAboutMe from "../components/BodySidePageAboutMe"


function Antique() {
    return (
        <BodySidePageAboutMe
            section={"antique"}
            title={"Antiquariato"}
            firstText={
                "Nato con un animo antico, amo rovistare nei mercatini dell'antiquariato per scovare oggetti inconsueti e originali."
            }
            secondText={
                "Seguo il mercato antiquario e trascorro i weekend a caccia di tesori perduti nei mercatini del nord Italia in cerca di antichità e rarità da aggiungere alla mia collezione sognando quale possa essere la loro storia e il loro passato."
            }
            thirdText={
                "E non solo..."
            }
            fourthText={
                "Nel tempo libero restauro i tesori della mia caccia, principalmente in legno e tessuto, per rivenderli da hobbista e donare loro nuova vita e non essere dimenticati."
            }
        />
    )
}

export default Antique