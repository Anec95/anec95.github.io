import styled from "styled-components";
import Carousel from "react-multi-carousel";


export const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    scroll-snap-align: center;

    ${ props =>
        props.position === 1 ?
        {
            backgroundColor: "rgba(143,71,97,0.2)"
        } :
        props.position === 2 ?
        {
            backgroundColor: "rgba(137, 92, 134,0.2)"
        } :
        props.position === 3 ?
        {
            backgroundColor: "rgba(119, 115, 161,0.2)"
        } :
        props.position === 4 ?
        {
            backgroundColor: "rgba(102, 136, 175,0.2)"
        } :
        props.position === 5 ?
        {
            backgroundColor: "rgba(98, 154, 177,0.2)"
        } :
        props.position === 6 ?
        {
            backgroundColor: "rgba(115, 169, 173,0.2)"
        } :
        ""
    }

    @media (max-width: 500px) {
        /* margin-top: 100px;
        height: calc(100vh - 100px);
        overflow-y: scroll;
        box-sizing: content-box; */
        all: unset;
        display: flex;
        flex-direction: column;
        margin: 100px 5px 50px 10px;
        padding-top: 10px;
        box-sizing: border-box;
        height: 100vh;
        overflow-y: scroll;

        ::-webkit-scrollbar {
            height: 5px;
            width: 5px;
            display: block;
            background: var(--light-invisible);
        }

        ::-webkit-scrollbar-thumb {
            -webkit-border-radius: 1ex;
            display: block;
            background: #882200;
        }

        ::-webkit-scrollbar-corner {
            display: block;
        }
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        overflow-x: hidden;
    }
`


// TITLE COMPONENT
export const TitleContainer = styled.div`
    position: absolute;
    height: 150px;
    left: 5%;
    top: 10%;
    color: #882200;
    box-sizing: border-box;

    @media (max-width: 500px) {
        /* height: 70px;
        top: 20%; */
        all: unset;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        height: 110px;
    }
`

export const StyledTitle = styled.h1`
    font-size: 90px;
    box-sizing: border-box;

    @media (max-width: 500px) {
        font-size: ${props =>
            props.title === "Professionalmente" ?
            "30px" :
            "35px"
        };
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: ${props =>
            props.title === "Professionalmente" ?
            "65px" :
            "70px"
        };
    }
`

export const StyledLogo = styled.img`
    width: 900px;
    margin: -180px -120px;

    @media (max-width: 500px) {
        width: 500px;
        margin: -140px -80px;
        margin-bottom: 0;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 600px;
        margin: -130px -70px;
    }

    @media (min-width: 1001px) and (max-width: 1300px) {
        width: 700px;
    }

    @media (min-width: 1301px) and (max-width: 1600px) {
        width: 800px;
    }
`

export const StyledSubtitle = styled.h3`
    font-size: 25px;
    text-align: end;
    padding-right: 10px;
    font-variant: small-caps;
    box-sizing: border-box;


    @media (max-width: 500px) {
        font-size: 20px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`


// TEXT COMPONENT
export const TextContainer = styled.div`
    box-sizing: border-box;
    position: absolute;
    right: 5%;
    top: calc(10% + 180px);
    width: 50%;
    padding: 0 100px 0 20px;
    color: #882200;
    height: 110px;

    @media (max-width: 500px) {
        /* width: 72%;
        padding: 0 10px;
        margin: auto;
        top: ${props => props.aboutMe ? "3%" : "calc(0% + 60px)"};
        left: 6%;
        overflow-y: scroll;
        height: calc(100% - 100px);

        ::-webkit-scrollbar {
            height: 5px;
            width: 5px;
            display: block;
            background: var(--light-invisible);
        }

        ::-webkit-scrollbar-thumb {
            -webkit-border-radius: 1ex;
            display: block;
            background: #882200;
        }

        ::-webkit-scrollbar-corner {
            display: block;
        } */
        all: unset;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 60%;
        right: 0%;
        padding: 0 90px 0 20px;
    }
`

export const TextTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 40px;

    @media (max-width: 500px) {
        font-size: 22px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 35px;
    }
`

export const StyledText = styled.p`
    font-size: 20px;
    line-height: 150%;
    padding-bottom: 10px;

    @media (max-width: 500px) {
        font-size: 18px;
        line-height: 130%;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

// CAROUSEL COMPONENT
export const CarouselContainer = styled.div`
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    padding-right: 100px;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 500px) {
        all: unset;

        /* padding: 0;
        height: 300px;
        justify-content: center;
        bottom: 65px; */
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        justify-content: center;
        padding: 0;
    }
`

export const CardStorage = styled(Carousel)`
    width: 78%; 
    height: 85%;
    position: relative;
    border-radius: 12px;
    box-sizing: border-box;
    box-shadow: inset 2px 2px 10px var(--scuro);
    background-color: var(--light);
    background-color: #BD9886;
    padding: 10px;

    @media (max-width: 500px) {
        width: 94%;
        margin-top: 0px;
        height: 300px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 90%;
        height: 470px;
        margin-top: 0px;
    } 
` 