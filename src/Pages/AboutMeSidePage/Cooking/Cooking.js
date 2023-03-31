import BodySidePageAboutMe from "../components/BodySidePageAboutMe"


function Cooking() {
    return (
        <BodySidePageAboutMe
            section={"cooking"}
            title={"Cucina"}
            firstText={
                "Fin da giovane ho una forte passione per la cucina e sperimentare, con gusto, delicatezza e un pizzico di follia; senza scordare gli insegnamenti delle nonne, che di gusto ne hanno sempre in abbondanza."
            }
            secondText={
                "Imparando dagli errori, dai consigli e dagli spunti ho scoperto come la miglior ricetta sia il non seguirne nessuna in particolare; ma utilizzare la propria esperienza per riadattare e creare."
            }
            thirdText={
                "Come tante cose, ritengo che la cucina sia ottima per allenare creatività e fantasia."
            }
            fourthText={
                "Utilizzando sempre ingredienti freschi e genuini."
            }
        />
    )
}

export default Cooking