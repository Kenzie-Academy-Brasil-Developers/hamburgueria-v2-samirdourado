import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;        
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }


    :root {
        --font-family-1: font-family: 'Inter', sans-serif;
        --color-primary: #27AE60;
        --color-primary50: #93D7AF;
        --color-secondary:#EB5757;

        --grey-600: #333333;
        --grey-300:  #828282;
        --grey-400:  #BDBDBD;
        --grey-100: #E0E0E0;
        --grey-0:  #F5F5F5;
        --white: #FFFFFF;

        --negative:#E60000;
        --warning: #FFCD07;
        --success:  #168821;
        --information: #155BCB;

        --title1: 1.125rem; /*16px;*/
        --title2:  1rem; /*16px;*/
        /*--title3: 1rem;*/ /*16px;*/
        --headline: 0.875rem; /*14px;*/
        --headlineBold: 0.75rem; /*12px;*/
        --headlineItalic: 0.75rem; /*12px;*/

        --font-family: "Inter", sans-serif;
    }

    a {
        cursor: pointer;
        background-color: var(--grey3);
        background-color: var(--grey1);
        border: none;
        border-radius: 4px;        
        font-weight: 600;
        font-size: var(--headline);
        color: var(--grey0);
    }

    .spinner {    
    animation: loading 1.5s infinite
    }

    @keyframes loading {
        0% {
            transform: rotateY(0deg);
        }

        100% {
            transform: rotateY(360deg);
        }
    }
`