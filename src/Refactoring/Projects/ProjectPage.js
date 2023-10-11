import { StyledMain } from "./styledComponents/styledProjects"
import InfoBox from "./components/InfoBox"
import DescriptionBox from "./components/DescriptionBox"
import AnimatedPage from "components/AnimatedPage"


function ProjectPage(props) {

    return (
        <AnimatedPage>
            <StyledMain>
                <InfoBox
                    clip={props.clip}
                    site_link_wording={props.site_link_wording}
                    link_github={props.link_github}
                    link_web_site={props.link_web_site}
                />
                <DescriptionBox
                    title={props.title}
                    description={props.description}
                />
            </StyledMain>
        </AnimatedPage>        
    )
}

export default ProjectPage