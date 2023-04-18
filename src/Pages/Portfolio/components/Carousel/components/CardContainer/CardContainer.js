import { CardStorage } from "Pages/Portfolio/components/Carousel/styledComponents/styledCarousel"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Card from "../Card/Card"
import { dataCardProjects } from "Data/dataCardProjects"



function CardContainer() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1001 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1000, min: 501 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1
      }
    };

    const cards = dataCardProjects.map(data => {
        return <Card key={data.idx} {...data} />
    })

    return (
        <CardStorage>
            <Carousel
              style={{zIndex: 3}}
              responsive={responsive}
            >
                {cards}
            </Carousel> 
        </CardStorage>     
    )

}

export default CardContainer