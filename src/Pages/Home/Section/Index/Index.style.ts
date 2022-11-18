import styled from "styled-components";
import {theme} from "../../../../Css/BreackPoints";
import {Width} from "../../../../Css/Varibla";


type Props = {
    move?: number,
    check?: boolean,
    mb?: string,
    animate?: string
}







export const SectionIndex = styled.section`
height: 100vh;
width: 100%;
position: relative;
//top: px;



.bg_images{
            width: 100%;
            height: 100%;
            object-fit: cover;
    }
`;


export const TextHover = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0%;

padding: 0 20px ;

${theme.breakpoints.up("md")}{
    width: 90%;
    margin: auto;
    max-width: ${Width.maxWidth};
}

`;


export const TextElement = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
gap: 80px;
height: 100%;


h1{
    color: white;
    font-size: 35px;
    
}

.motto{
    color: white;
    text-align: center;
    font-size: 25px;
    font-style: italic;
    
}


.btn_desk{
       
    }

${theme.breakpoints.up("md")}{
    
    padding: 0 20px;
    gap: 0;
    
    

    h1{
        font-size: 110px;
        margin: 60px 0 50px 0;
    }

    .motto{
        font-size: 35px;
        color: white;
        font-size: 35px;
        font-style: italic;
        text-align: center;
    }

    .btn_desk{
        margin-top: 180px;
    }
}


`;













export const ContactElement = styled.div`

width: 90%;
left: 50%;
transform: translateX(-50%);
height: 1px;
position: absolute;
bottom: 50px;
display: flex;
align-items: center;
justify-content:  space-between;
color: white;


.social_media{
    display: flex;
    align-items: center;
    gap: 15px;
    width: 50%;



span{
    height: 1px;
    background-color: white;
    width: 20%;
    &:first-child{
        width: 100%
    }

    &:last-child{
        width: 100%;
    }
}

}
`




// slider component img


export const ComponentsImgSlider = styled.div`
  position: relative;
  height: 100vh;
  min-width: 100%;
  
`


export const DivImg = styled.div<Props>`
   min-width: 100%;
   height: 100%;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}


  
  `




