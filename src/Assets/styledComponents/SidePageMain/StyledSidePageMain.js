import styled from "styled-components";

export const SidePageMain = styled.main`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    ${
        props => props.pathname === "/portfolio" ?
        {display: "flex", flexDirection: "column"} :
        props.pathname === "/about_me" ?
        {padding: "120px 20%", display: "flex", flexDirection: "column"} :
        props.pathname === "/professionalmente_me" ?
        {padding: "120px 20%", display: "flex", flexDirection: "column"} :
        props.pathname === "/template" ?
        {padding: "120px 20%"} :
        ""
    }

    @media (max-width: 500px) {
        ${
        props => props.pathname === "/portfolio" ?
        {display: "flex", flexDirection: "column", padding: "40px 5px", overflowX: "hidden"} :
        props.pathname === "/about_me" ?
        {padding: "60px 7%"} :
        props.pathname === "/professionalmente_me" ?
        {padding: "60px 30px"} :
        props.pathname === "/template" ?
        {padding: "120px 6%", overflowX: "hidden"} :
        ""
        }
    }
    
    @media (min-width: 501px) and (max-width: 1000px) {
        ${
        props => props.pathname === "/portfolio" ?
        {display: "flex", flexDirection: "column"} :
        props.pathname === "/about_me" ?
        {padding: "50px 15%"} :
        props.pathname === "/professionalmente_me" ?
        {padding: "80px 80px"} :
        props.pathname === "/template" ?
        {padding: "100px 8%"} :
        ""
        }
    }
`