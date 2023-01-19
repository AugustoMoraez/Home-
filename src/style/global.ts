import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        font-family: 'Poppins';
        cursor: default;
        transition: all 0.4 ease-out;
    }
    button{
        cursor: pointer;
        border: none;
    }
    a{
        outline: none;
        font-style: none;
    }

` 