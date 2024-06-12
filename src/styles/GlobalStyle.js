
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.text};
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
