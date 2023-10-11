import AnimatedPage from "components/AnimatedPage"
import { HomeBody, LogoBox, LogoImg, LogoSubtitle, LogoTitle, TitleBox } from "./styledComponents/styledHome"
import logoImg from "Assets/images/logo/logo_head_square.svg"

function Home() {
    
    return (
        <AnimatedPage>
            <HomeBody>
                <LogoBox>
                    <LogoImg src={logoImg} alt="My logo" />
                        
                    <TitleBox>
                        <LogoTitle>Thomas Miori</LogoTitle>
                        <LogoSubtitle>Web Developer</LogoSubtitle>
                    </TitleBox>
                </LogoBox>
            </HomeBody>
        </AnimatedPage>        
    )
}

export default Home