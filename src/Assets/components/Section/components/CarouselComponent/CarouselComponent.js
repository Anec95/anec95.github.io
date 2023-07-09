import "react-multi-carousel/lib/styles.css"
import { CardStorage, CarouselContainer } from "../../styledComponents/styledSection"
import Card from "Computer_vs/Portfolio/components/Card/Card";
import { dataCardProjects } from "Data/dataCardProjects";

function CarouselComponent(props) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3001 },
          items: 5
        },
        largeDesktop: {
          breakpoint: { max: 3000, min: 1801 },
          items: 4
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
      
      // const carsTemplate =

    return (
        <CarouselContainer>
            <CardStorage
                responsive={responsive}
            >
                {props.type === "portfolio" ?
                    cardsProject :
                    props.type === "template" ?
                    <div></div> :
                    ""
                }
            </CardStorage>
        </CarouselContainer>
        
    )
}

export default CarouselComponent