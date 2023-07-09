import { SocialIconContainer, SocialLink, SocialIcon } from "../../styledComponents/styledNavbar" 
import linkedinIcon from "Assets/images/icons/linkedin.svg"
import githubIcon from "Assets/images/icons/github.svg"


function Social() {

    return (
        <SocialIconContainer>
            <SocialLink
                to="http://linkedin.com/in/thomas-m-a75156202"
                target="_blank"
            >
                <SocialIcon
                    src={linkedinIcon}
                />
            </SocialLink>
            <SocialLink
                to="https://github.com/Anec95"
                target="_blank"
            >
                <SocialIcon
                    src={githubIcon}
                />
            </SocialLink>
        </SocialIconContainer>
    )
}

export default Social