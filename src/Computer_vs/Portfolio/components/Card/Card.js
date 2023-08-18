import { StyledCard, ClipProject, ProjectTitle, ProjectDescription, ProjectLink } from "Computer_vs/Portfolio/styledComponents/styledPortfolio";


function Card(props) {

    return (
        <StyledCard>
            <ClipProject
                controls
                autoplay
                muted
                loop
            >
                <source src={props.clip} type="video/mp4" />
            </ClipProject>
            <ProjectTitle>{props.title}</ProjectTitle>
            <ProjectDescription>{props.description}</ProjectDescription>
            <ProjectLink
                to={props.link_github}
                target="_blank"
            >
                GITHUB
            </ProjectLink>
            <ProjectLink
                to={props.link_web_site}
                target="_blank"
            >
                {props.site_link_wording}
            </ProjectLink>
        </StyledCard>
    )
}

export default Card