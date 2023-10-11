import "react-multi-carousel/lib/styles.css"
import { CarouselContainer, CardStorage } from "../styledComponents/styledPortfolio";
import { dataCardProjects } from "Data/dataCardProjects";
import Card from "./Card";


function CarouselComponent() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3001 },
          items: 5
        },
        largeDesktop: {
          breakpoint: { max: 3000, min: 1801 },
          items: 3
        },
        desktop: {
            breakpoint: { max: 1800, min: 1001 },
            items: 3
          },
        tablet: {
          breakpoint: { max: 1000, min: 501 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 500, min: 0 },
          items: 1
        }
      };
      
      const cardsProject = dataCardProjects.map(data => {
          return <Card key={data.idx} {...data} />
      })

    return (
        <CarouselContainer>
            <CardStorage
                responsive={responsive}
            >
                {cardsProject}
            </CardStorage>
        </CarouselContainer>
        
    )
}

export default CarouselComponent