import { StyledDescriptionBox, StyledTitle, StyledParagraph } from "../styledComponents/styledProjects"

function DescriptionBox(props) {
    const ProjectDescription = props.description.map(({key, value}) => {
        return <StyledParagraph key={key}>{value}</StyledParagraph>
    })
    console.log(ProjectDescription)
    return (
        <StyledDescriptionBox>
            <StyledTitle>{props.title}</StyledTitle>
            {ProjectDescription}
        </StyledDescriptionBox>
    )
}

export default DescriptionBox