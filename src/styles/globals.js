import { createGlobalStyle } from 'styled-components';
import { colorsDark } from './paltte';

const GolbalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        font-family: Lato,Helvetica-Neue,Helvetica,Arial,sans-serif;
        width:100vw;
        overflow-x:hidden;
        background: ${colorsDark.background}
        margin:0;
        padding:0;
        font-size:16px;
    }
    html{
        font-size:100px;
    }

    a {
        text-decoration: none;

        // &:visited {
        //     color: inherit;
        // }
    }
`;

export default GolbalStyle;
