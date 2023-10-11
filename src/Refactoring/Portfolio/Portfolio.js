import CarouselComponent from "./components/CarouselComponent"
import TextBox from "./components/TextBox"
import { StyledMain, StyledTitle } from "./styledComponents/styledPortfolio"
import AnimatedPage from "components/AnimatedPage"


function Portfolio() {

    return (
        <AnimatedPage>
            <StyledMain>
                <StyledTitle>Portfolio</StyledTitle>
                <TextBox />
                <CarouselComponent />
            </StyledMain>
        </AnimatedPage>
    )
}

export default Portfolio