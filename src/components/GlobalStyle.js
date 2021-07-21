import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box; 
    }
    body{
        @media (max-width: 780px) {
           display:flex;
           align-items: center;
           justify-content: center;
           justify-items: center;
        }
    }


    body{
    padding: 2rem 5rem;
    font-size: 16px;
    margin: 0;
    font-family: 'Barlow Condensed', sans-serif;
    background-color: #DEE2E6;
    background-image: url("https://www.transparenttextures.com/patterns/inspiration-geometry.png"); 
    }

    iframe{
        border: 1px solid #000;
        margin: 11px;
    }

    iframe{
        @media (max-width: 500px) {
            width:323px;
            margin: 1px;
        }
    }  
`;

export default GlobalStyle;
