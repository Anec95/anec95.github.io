import { Arrow } from "Pages/Template/styledComponents/styledCarousel"


function ArrowBtn(props) {
    
    return (
        <Arrow
            className="material-icons-round"
            // onClick={props.direction === 'left' ?
            //     props.function :
            //     () => {props.function()}
            // }
            onClick={props.function}
            direction={props.direction}
        >
            {props.direction === "left" ? "navigate_before" : "navigate_next"}
        </Arrow>
    )
}

export default ArrowBtn