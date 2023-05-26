import { CardContainer, CarouselContainer } from "Pages/Template/styledComponents/styledCarousel"
import ArrowBtn from "./components/ArrowBtn"


function TemplateCarousel(props) {
    return (
        <CarouselContainer>
            <ArrowBtn
                function={props.functionMinus}
                direction={'left'}
            />
            <CardContainer>
                {props.index === 0 && props.cardTemplateElement[0]}
                {props.index === 1 && props.cardTemplateElement[1]}
                {props.index === 2 && props.cardTemplateElement[2]}
            </CardContainer>
            <ArrowBtn
                function={props.functionPlus}
                direction={'right'} 
            />
        </CarouselContainer>
    )
}

export default TemplateCarousel