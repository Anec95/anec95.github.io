import { CardStorage } from "Pages/Portfolio/components/Carousel/styledComponents/styledCarousel"
import Card from "../Card/Card"
import Button from "../Button/Button"
import { useState, useEffect } from "react"
import { dataCardProjects, dataCardProjectsSmartphone, dataCardProjectsTablet } from "Data/dataCardProjects"



function CardContainer(props) {
    const [cards, setCards] = useState(dataCardProjects)
    const [cardNumber, setCardNumber] = useState(2)

    useEffect(() => {
        if (props.widthPage <= 500) {
            setCards(dataCardProjectsSmartphone)
            setCardNumber(0)
        } else if (props.widthPage > 500 && props.widthPage <= 900) {
            setCards(dataCardProjectsTablet)
            setCardNumber(1)
        } else {
            setCards(dataCardProjects)
            setCardNumber(2)
        }
    }, [props.widthPage])
    
    
    const handleLeftClick = () => {
        const prevState = [...cards];

        // find first current active card - so we could make it inactive
        const firstCurrentActiveCardIdx = prevState // get the idx of the one with the highest number of pos from active cards 
          .filter((ft) => ft.active === true) // get only the active cards 
          .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx; // basically getting the idx of the one with the highest pos
        
        // find next inactive card - so we could make it active
        var nextInactiveCardIdx;
        if (prevState.filter((ft) => ft.active === true)[cardNumber].idx !== prevState.length) // di default 2
          nextInactiveCardIdx = prevState.filter((ft) => ft.active === true)[cardNumber].idx + 1 // di default 2
        else
          nextInactiveCardIdx = prevState.filter((ft) => ft.active === false)[0].idx
        
        // update
        prevState.find((f) => f.idx === firstCurrentActiveCardIdx).active = false;
        prevState.find((f) => f.idx === nextInactiveCardIdx).active = true;
        
        // maximize pos
        prevState.find((f) => f.idx === firstCurrentActiveCardIdx).pos =
          Math.max.apply(
            null,
            prevState.map(function (o) {
              return o.pos;
            })
          ) + 1;
    
        // update state
        setCards(prevState);
      };
    
      const handleRightClick = () => {
        const prevState = [...cards];

        // find last current active card - so we could make it inactive
        const lastCurrentActiveCardIdx = prevState // get the idx of the one with the highest number of pos from active cards 
          .filter((ft) => ft.active === true) // get only the active cards 
          .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[cardNumber].idx; // di default 2 - basically getting the idx of the one with the highest pos
        
        // find next inactive card - so we could make it active
        var previousInactiveCardIdx;
        if (prevState.filter((ft) => ft.active === false)[0].idx !== 1)
          previousInactiveCardIdx = prevState.filter((ft) => ft.active === false)[cardNumber].idx //di default 2
        else 
          previousInactiveCardIdx = prevState.filter((ft) => ft.active === true)[0].idx - 1
        
        // update
        prevState.find((f) => f.idx === lastCurrentActiveCardIdx).active = false;
        prevState.find((f) => f.idx === previousInactiveCardIdx).active = true;
        
        // maximize pos
        prevState.find((f) => f.idx === previousInactiveCardIdx).pos =
          Math.min.apply(
            null,
            prevState.map(function (o) {
              return o.pos;
            })
          ) - 1;
    
        // update state
        setCards(prevState);
      };

    return (
        <>
            <CardStorage>
                <Button direction={"left"} function={handleRightClick} />
                {cards
                    .filter((f) => f.active === true)
                    .sort((a, b) => (a.pos > b.pos ? 1: b.pos > a.pos ? -1 : 0))
                    .map((card, index) => (
                        <Card key={index} {...card} />
                    ))
                }
                <Button direction={"right"} function={handleLeftClick} />
            </CardStorage>
            
        </>
        
    )
}

export default CardContainer