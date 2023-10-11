import { Header } from "./styledComponents/styledNavbar"
import { useLocation } from "react-router"
import AnimatedHeader from "components/AnimatedHeader";
import LinkBox from "./components/LinkBox";


function Navbar() {
    const location = useLocation()    

    return (
        
        <Header
            pathname={location.pathname}
        >
            <AnimatedHeader>
                <LinkBox />
            </AnimatedHeader>     
        </Header>
        
    )
}

export default Navbar