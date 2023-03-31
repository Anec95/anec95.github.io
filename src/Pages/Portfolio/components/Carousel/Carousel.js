import CardContainer from "./components/CardContainer/CardContainer"
import { useState, useEffect } from "react";



function Carousel() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }
        

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    console.log(windowSize)

    return (
        <>
            <CardContainer widthPage={windowSize.innerWidth} />
        </>
    )
}

export default Carousel