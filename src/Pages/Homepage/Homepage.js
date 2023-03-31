import LeftSection from "./components/LeftSection/LeftSection"
import Navbar from "./components/Navbar/Navbar"
import { HomepageMain } from "./styledComponents/styledComponents"


function Homepage() {
    return (
        <HomepageMain>
            <LeftSection />
            <Navbar />
        </HomepageMain>        
    )
}

export default Homepage