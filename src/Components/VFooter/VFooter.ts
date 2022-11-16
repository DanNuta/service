import styled from "styled-components";
import { ColorBg } from "../../Css/Varibla";
import {theme} from "../../Css/BreackPoints";
import { Width } from "../../Css/Varibla";


export const Footer = styled.footer`
background-color: ${ColorBg.primaryColor};
padding: 0 20px;



.all_right{
    text-align: center;
    color: white;
    padding: 20px 0;
}


`


export const Map = styled.div`
height: 150px;
width: 100%;
border: 0;
margin-bottom: 45px;

${theme.breakpoints.up("md")}{
    height: 450px;
}
iframe{
    width: 100%;
    height: 100%;
}

`;



export const ElementFooter = styled.div`

display: flex;
flex-direction: column;
align-items: center;
text-align: center;
gap: 30px;
padding-bottom: 20px;

${theme.breakpoints.up("md")}{
    flex-direction: row;
    width: 90%;
    margin: auto;
    justify-content: space-between;
    max-width: ${Width.maxWidth};
}


.logo{

    img{
        width: 150px;
    }
}


li{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    

    ${theme.breakpoints.up("md")}{
        align-items: flex-start;
        justify-content: flex-start;
    }
}


.contact{
    display: flex;
    gap: 15px;
    flex-direction: column;

    li{
        &:first-child{
            margin-bottom: 15px;
        }

       

    }
   
}


.urmariti{
    li{
        &:first-child{
            margin-bottom: 15px;
        }
    }
}

`

export const Href = styled.a`

text-transform: uppercase;

`;

export const Li = styled.li`

margin-bottom: 15px;

`