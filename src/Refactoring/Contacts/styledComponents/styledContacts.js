import styled from "styled-components";

export const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-color: #434341;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    @media (max-width: 500px) {
        
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const StyledTitleBox = styled.div`
    align-self: flex-start;
    display: flex;
    align-items: flex-end;
    padding-top: 200px;
    padding-left: 150px;

    @media (max-width: 500px) {
        padding-top: 140px;
        padding-left: 20px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const StyledTitle = styled.h1`
    font-size: 80px;
    padding-left: 10px;
    color: #808000;

    @media (max-width: 500px) {
        font-size: 30px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`

export const StyledPhotoTitle = styled.img`
    width: 120px;

    @media (max-width: 500px) {
        width: 50px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        
    }
`


// EMAIL FORM

export const StyledForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    box-sizing: border-box;
    color: var(--light);
    margin-top: 80px;

    @media (max-width: 500px) {
        width: 100%;
        margin-top: 20px;
        align-items: center;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        padding: 0;
        margin: 0;
    }
`

export const StyledMailImg = styled.img`
    width: 400px;
    position: absolute;
    margin-right: -250px;
    transform: rotate(20deg);

    @media (max-width: 500px) {
        width: 300px;
        margin-right: -300px;
        margin-top: 80px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        padding: 0;
        margin: 0;
    }
`

export const StyledTextArea = styled.textarea`
    width: 600px;
    height: 150px;
    font-size: 20px;
    padding: 20px;
    color: var(--light);
    box-shadow: inset 0px 0px 50px var(--light), 10px 10px 20px var(--text_black);
    border-radius: 12px;
    border: 1px solid var(--text_black);
    background-color: #808000;
    font-family: 'Roboto';
    margin: 20px 0 5px 0;
    box-sizing: border-box;
    z-index: 10;

    &:focus{
        background-color: var(--text_black);
    }

    @media (max-width: 500px) {
        margin: 10px;
        width: 70%;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    
    }
`

export const StyledInput = styled.input`
    width: 600px;
    border: none;
    color: var(--light);
    border-radius: 12px;
    margin: 20px 0 5px 0;
    border: 1px solid var(--text_black);
    box-sizing: border-box;
    z-index: 10;

    ${
        props => props.type === "submit" ?
        {
            width: "max-content",
            padding: "10px 40px",
            fontSize: "20px",
            fontFamily: "Aboreto",
            marginTop: "30px",
            fontWeight: "600",
            // alignSelf: "center",
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
    background-color: #808000;
    box-shadow: inset 0px 0px 20px var(--light), 10px 10px 20px var(--text_black);

    ${
        props => props.type !== "submit" && '&:focus {background-color: var(--text_black)}'
    }
    


    @media (max-width: 500px) {        
        ${
            props => props.type === "submit" ?
            {
                margin: "10px",
                marginLeft: "50%",
                transform: "translateX(-50%)"
            } :
            {
                margin: "10px",
                width: "70%"
            }
        }
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    
    }
`