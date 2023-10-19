import AnimatedPage from "components/AnimatedPage"
import { StyledMain } from "./styledComponents/styledAboutMe"
import Bio from "./components/Bio/Bio"
import ProfessionalmenteMe from "./components/ProfessionalmenteMe/ProfessionalmenteMe"
import { useState, useEffect } from "react";


function AboutMe() {
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

    console.log(windowSize.innerWidth)

    return (
        <AnimatedPage>
            <StyledMain>
                <Bio width={windowSize.innerWidth} />
                <ProfessionalmenteMe width={windowSize.innerWidth} />
            </StyledMain>
        </AnimatedPage>
    )
}

export default AboutMe

