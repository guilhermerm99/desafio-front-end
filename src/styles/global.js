import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: #101010;
        font-family: 'Source Sans Pro', sans-serif;
        height: 100vh;
        width: 100vw;
    }
`;

export default GlobalStyle;
