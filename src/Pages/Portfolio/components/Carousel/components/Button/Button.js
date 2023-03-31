import { ArrowBtn } from "../../styledComponents/styledCarousel"



function Button(props) {
    return (
        <ArrowBtn
            className="material-icons-round"
            onClick={props.function}
            direction={props.direction}
        >
            {props.direction === "left" ? "navigate_before" : "navigate_next"}
        </ArrowBtn>
    )
}

export default Button