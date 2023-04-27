import InfoSoapBtn from "./components/InfoBtn"
import NavBar from "./components/NavBar"
import { SoapMain, SoapTitle } from "./styledComponents/styledSoapTemplate"


function SoapStorefrontSite() {
    return (
        <SoapMain>
            <InfoSoapBtn />
            <SoapTitle>I Saponi di nonna Gesualda</SoapTitle>
            <NavBar/>
        </SoapMain>
    )
}

export default SoapStorefrontSite