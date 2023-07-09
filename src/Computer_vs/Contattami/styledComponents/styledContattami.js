import styled from "styled-components"

export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: 10px;
    
    position: absolute;
    right: 5%;
    top: calc(10% + 180px);
    width: 50%;
    padding: 0 100px 0 20px;
    color: var(--light);

    @media (max-width: 500px) {
        width: 70%;
        padding: 0;
        margin: 0;
        top: calc(8% + 80px);
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        padding: 0;
        margin: 0;
    }
`

export const StyledTextArea = styled.textarea`
    height: 150px;
    font-size: 20px;
    padding: 20px;
    color: var(--light);
    /* box-shadow: inset 2px 2px 10px var(--scuro); */
    box-shadow: inset 2px 2px 10px var(--light);
    border-radius: 12px;
    border: 2px solid var(--scuro);
    background-color: rgba(0,40,44,0.7);
    font-family: 'Roboto';
    margin: 20px 0 5px 0;
`

export const StyledInput = styled.input`
    border: none;
    color: var(--light);
    border-radius: 12px;
    margin: 20px 0 5px 0;
    border: 2px solid var(--scuro);

    ${
        props => props.type === "submit" ?
        {
            width: "max-content",
            padding: "10px 40px",
            fontSize: "20px",
            fontFamily: "Aboreto",
            marginTop: "30px",
            fontWeight: "600",
            alignSelf: "center",
            cursor: "pointer",
            boxShadow: " 0px 0px 10px var(--scuro)"
        } :
        {
            height: "40px",
            fontSize: "20px",
            padding: "0 20px",
            fontFamily: 'Roboto',
            boxShadow: "inset 2px 2px 10px var(--light)"
        }
    }

    background-color: ${props =>
        props.type === "submit" ?
        "rgba(0,40,44,0.6)" :
        props.type === "text" ?
        "rgba(0,40,44,0.9)" :
        props.type === "email" ?
        "rgba(0,40,44,0.8)" : 
        ""
    };
`