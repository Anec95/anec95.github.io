import styled from "styled-components"


export const HomepageMain = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @media (max-width: 500px) {
        flex-direction: column;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        flex-direction: column;
    }
`