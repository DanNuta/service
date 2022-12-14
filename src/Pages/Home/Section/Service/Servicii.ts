import styled from "styled-components";
import {ColorBg} from "../../../../Css/Varibla";
import {theme} from "../../../../Css/BreackPoints";
import { Width } from "../../../../Css/Varibla";


export const Servicii = styled.section`

padding-top: 30px;
background-color: ${ColorBg.primaryColor};
color: white;
padding: 20px 20px 30px 20px;

${theme.breakpoints.up("md")}{
padding: 0;

}

h1{
    text-align: center;
}

`;


export const ServiciiElement = styled.div`

${theme.breakpoints.up("md")}{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
`;


export const MarginElement = styled.div`

.motto{
    text-align: center;
    margin-top: 20px;
    font-style: italic;
}

   ${theme.breakpoints.up("md")}{
        width: 90%;
        margin: auto;
        max-width: ${Width.maxWidth};
        padding: 45px 0 100px 0;
   }
`;






