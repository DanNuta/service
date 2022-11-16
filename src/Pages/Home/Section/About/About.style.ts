import styled from "styled-components";
import {ColorBg} from "../../../../Css/Varibla";
import {theme} from "../../../../Css/BreackPoints";
import { Width } from "../../../../Css/Varibla";


export const About = styled.div`

padding: 0 20px;
color: white;

${theme.breakpoints.up("md")}{
    display: flex;
    gap: 30px;
    width: 90%;
    max-width: ${Width.maxWidth};
    margin: auto;
    
    padding: 0;
    align-items: center;
    
}


.title_desktop{
    color: white;
    display: block;
    ${theme.breakpoints.up("md")}{
        display: none;
        color: white;
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
color: white;


.motto{
        font-style: italic;
        font-size: 20px;
        text-align: end;
        margin-top: 70px;
}

.about_text{
    font-size: 20px;
}

${theme.breakpoints.up("md")}{
    width: 50%;

    .title{
        text-align: center;
    }


    .about_text{
        margin: 20px 0;
        font-size: 24px;
       
    }

    .motto{
        font-style: italic;
        font-size: 22px;
        text-align: end;
        margin-top: 70px;
    }
}



.title{
    display: none;

    ${theme.breakpoints.up("md")}{
        display: block;
        
        
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
`;


export const BackgroundColor = styled.section`
  background-color: ${ColorBg.primaryColor};
  padding: 100px 0;
`;