import { StyledInfoBox, StyledProjectClip, StyledProjectLink } from "../styledComponents/styledProjects"


function InfoBox(props) {

    return (
        <StyledInfoBox>
            <StyledProjectClip
                autoplay
                controls
                muted
                loop
            >
                <source src={props.clip} type="video/mp4" />
            </StyledProjectClip>
            <StyledProjectLink
                target="_blank"
                to={props.link_github}
            >
                Github
            </StyledProjectLink>
            <StyledProjectLink
                target="_blank"
                to={props.link_web_site}
            >
                {props.site_link_wording}
            </StyledProjectLink>
        </StyledInfoBox>
    )
}

export default InfoBox