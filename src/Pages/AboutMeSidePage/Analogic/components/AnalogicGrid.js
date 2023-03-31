import { GridContainer } from "Pages/AboutMeSidePage/styledComponents/styledComponents"
import GridPhoto from "./GridPhoto"

import tre_cime from "Assets/images/analogic-photo/3-cime-autumn-2021.JPG"
import bartender_creation from "Assets/images/analogic-photo/bartender-in-creation-2022.JPG"
import bartender_in_progress from "Assets/images/analogic-photo/bartender-in-progress-2022.JPG"
import boy_by_lake from "Assets/images/analogic-photo/boy-by-the-lake-2020.jpg"
import caldonazzo_lake from "Assets/images/analogic-photo/caldonazzo-lake-2020.jpg"
import carezza_lake from "Assets/images/analogic-photo/carezza-lake-2020-(2).JPG"
import fraveggio from "Assets/images/analogic-photo/fraveggio-2020.jpg"
import girl_window from "Assets/images/analogic-photo/girl-at-the-window-2021.JPG"
import girl_senna from "Assets/images/analogic-photo/girl-on-the-senna-paris-2022.JPG"
import girl_tower from "Assets/images/analogic-photo/girl-on-the-tower-provins-2022.JPG"
import i_am_engineer from "Assets/images/analogic-photo/i-am-an-engineer-2021.jpg"
import i_am_engineer_2 from "Assets/images/analogic-photo/i-am-an-engineer-b++++es.jpg"
import louvre_paris from "Assets/images/analogic-photo/louvre-paris-2022.JPG"
import pizza_boy from "Assets/images/analogic-photo/pizza-boy-2020.jpg"
import pizza_boy_2 from "Assets/images/analogic-photo/pizza-boy-2020-(2).jpg"
import tenno_lake from "Assets/images/analogic-photo/tenno-lake-autumn-2021.JPG"
import tour_eiffel from "Assets/images/analogic-photo/tour-eiffel-paris-2022.JPG"
import tour_eiffel_2 from "Assets/images/analogic-photo/tour-eiffel-paris-2022 (2).JPG"
import versailles_garden from "Assets/images/analogic-photo/versailles-gardens-2022.JPG"
import versailles_garden_2 from "Assets/images/analogic-photo/versailles-gardens-2022-(2).JPG"
import versailles_garden_3 from "Assets/images/analogic-photo/versailles-gardens-2022-(3).JPG"





function AnalogicGrid() {
    return (
        <GridContainer>
            <GridPhoto
                src={boy_by_lake}
                columnStart={1}
                columnEnd={2}
                rowStart={1}
                rowEnd={3}
                delayImg={0.25}
            />
            <GridPhoto
                src={tre_cime}
                columnStart={2}
                columnEnd={5}
                rowStart={1}
                rowEnd={3}
                delayImg={0.5}
            />
            <GridPhoto
                src={bartender_creation}
                columnStart={1}
                columnEnd={3}
                rowStart={3}
                rowEnd={5}
                delayImg={0.75}
            />
            <GridPhoto
                src={bartender_in_progress}
                columnStart={3}
                columnEnd={4}
                rowStart={3}
                rowEnd={5}
                delayImg={1}
            />
            <GridPhoto
                src={i_am_engineer}
                columnStart={4}
                columnEnd={5}
                rowStart={3}
                rowEnd={5}
                delayImg={1.25}
            />
            <GridPhoto
                src={pizza_boy_2}
                columnStart={1}
                columnEnd={2}
                rowStart={5}
                rowEnd={7}
                delayImg={1.5}
            />
            <GridPhoto
                src={fraveggio}
                columnStart={2}
                columnEnd={3}
                rowStart={5}
                rowEnd={6}
                delayImg={1.75}
            />
            <GridPhoto
                src={tour_eiffel}
                columnStart={2}
                columnEnd={3}
                rowStart={6}
                rowEnd={7}
                delayImg={2}
            />
            <GridPhoto
                src={carezza_lake}
                columnStart={3}
                columnEnd={5}
                rowStart={5}
                rowEnd={7}
                delayImg={2}
            />
            <GridPhoto
                src={pizza_boy}
                columnStart={1}
                columnEnd={2}
                rowStart={7}
                rowEnd={9}
            />
            <GridPhoto
                src={louvre_paris}
                columnStart={2}
                columnEnd={4}
                rowStart={7}
                rowEnd={9}
                delayImg={2}
            />
            <GridPhoto
                src={tour_eiffel_2}
                columnStart={4}
                columnEnd={5}
                rowStart={7}
                rowEnd={9}
                delayImg={2}
            />
            <GridPhoto
                src={girl_window}
                columnStart={1}
                columnEnd={2}
                rowStart={9}
                rowEnd={11}
                delayImg={2}
            />
            <GridPhoto
                src={girl_senna}
                columnStart={2}
                columnEnd={4}
                rowStart={9}
                rowEnd={11}
            />
            <GridPhoto
                src={girl_tower}
                columnStart={4}
                columnEnd={5}
                rowStart={9}
                rowEnd={11}
                delayImg={2}
            />
            <GridPhoto
                src={i_am_engineer_2}
                columnStart={1}
                columnEnd={2}
                rowStart={11}
                rowEnd={13}
                delayImg={2}
            />
            <GridPhoto
                src={versailles_garden_2}
                columnStart={2}
                columnEnd={5}
                rowStart={11}
                rowEnd={13}
                delayImg={2}
            />
            <GridPhoto
                src={versailles_garden_3}
                columnStart={1}
                columnEnd={4}
                rowStart={13}
                rowEnd={15}
                delayImg={2}
            />
            <GridPhoto
                src={versailles_garden}
                columnStart={4}
                columnEnd={5}
                rowStart={13}
                rowEnd={15}
                delayImg={2}
            />
            <GridPhoto
                src={tenno_lake}
                columnStart={1}
                columnEnd={3}
                rowStart={15}
                rowEnd={17}
                delayImg={2}
            />
            <GridPhoto
                src={caldonazzo_lake}
                columnStart={3}
                columnEnd={5}
                rowStart={15}
                rowEnd={17}
                delayImg={2}
            />
        </GridContainer>
    )
}

export default AnalogicGrid