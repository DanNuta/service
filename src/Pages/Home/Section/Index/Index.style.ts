import styled from "styled-components";
import {theme} from "../../../../Css/BreackPoints";
import {Width} from "../../../../Css/Varibla";


type Props = {
    move?: number,
    check?: boolean,
    mb?: string
}







export const SectionIndex = styled.section`
height: 100vh;
width: 100%;
position: relative;
top: -25px;



.bg_images{
            width: 100%;
            height: 100%;
            object-fit: cover;
    }
`;


export const TextHover = styled.div`
position: absolute;
top: 50%;
bottom: 0;
right: 0;
left: 0;
transform: translateY(-50%);
padding: 0 20px ;

${theme.breakpoints.up("md")}{
    display: flex;
    align-items: center;
    padding: 0;
   
}


.btn_element{
    display: none;

    ${theme.breakpoints.up("md")}{
        display: block;
       
    }
}

.btn{
    margin-top: 20px;

    ${theme.breakpoints.up("md")}{
        display: none;
    }
}

`;


export const TextElement = styled.div`


${theme.breakpoints.up("md")}{
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(13.5px);
    padding: 100px 150px 100px 20px;
    width: 60%;
    

    h1{
        margin-bottom: 55px;
    }
}


h1{
    color: white;
    

}

`;




export const TouchEventElement = styled.div<Props>`
display: inline-flex;
gap: 20px;
transform: ${props => `translate(-${props.move}px)`};
padding: 20px 0;

${theme.breakpoints.up("md")}{
    position: absolute;
    right: 0;
    width: 45%;
    display: flex;
    overflow-x: scroll;
    
   
}


.arrow_element{
    display: none;

    ${theme.breakpoints.up("md")}{
        display: block;
        position: absolute;
        background-color: red;
        height: 100px;
        z-index: 999;
       
        

        img{
        
        &:last-child{
            position: absolute;
            left: 100px;
            background-color: green;
            top: 50%;
            transform: translateY(50%);
        }

       }
    }
}

`;



export const ImgTouchElement = styled.div<Props>`
display: inline-block;
width: 100px;
height: 100px;
background-color: green;



img{
    height: 100%;
        width: 100%;
        object-fit: cover;
}


${theme.breakpoints.up("md")}{
    min-width: 220px;
    height: 240px;
    display: block;

    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
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




