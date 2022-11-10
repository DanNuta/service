import styled from "styled-components";
import {ColorBg} from "../../../../Css/Varibla";
import {theme} from "../../../../Css/BreackPoints";
import { Width } from "../../../../Css/Varibla";


export const About = styled.section`

padding: 0 20px;



${theme.breakpoints.up("md")}{
    display: flex;
    gap: 30px;
    width: 90%;
   max-width: ${Width.maxWidth};
    margin: 100px auto;
    padding: 0;
    align-items: center;
}


.title_desktop{
    display: block;
    ${theme.breakpoints.up("md")}{
        display: none
    }
}





`;


export const LeftPhoto = styled.div`

margin: 20px 0;

${theme.breakpoints.up("md")}{
    margin: 0;
    height: 500px;
    width: 50%;
    
}

img{
    width: 100%;
    height: 100%;
}

`;

export const RightPhoto = styled.div`

${theme.breakpoints.up("md")}{
    width: 50%;


    .about_text{
        margin: 40px 0;
        color: ${ColorBg.primaryColor};
    }
}



.title{
    display: none;

    ${theme.breakpoints.up("md")}{
        display: block;
        color: ${ColorBg.primaryColor};
        
    }
}




`;


export const ExperienceInCifre = styled.div`

display: flex;
align-items: center;
flex-direction: column;
text-align: center;

${theme.breakpoints.up("md")}{
    flex-direction: row;
    justify-content: space-between;
   
}

h1{
    color: ${ColorBg.hoverColor};
    margin:  20px 0;

   
    
}

`