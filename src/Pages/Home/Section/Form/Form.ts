import styled from "styled-components";
import { ColorBg } from "../../../../Css/Varibla";
import {theme} from "../../../../Css/BreackPoints";
import { Width } from "../../../../Css/Varibla";


export const Form = styled.form`



.form_photo{
    width: 100%;
    ${theme.breakpoints.up("md")}{
        display: flex;
        gap: 30px;
        align-items: center;
        margin: auto;
        max-width: ${Width.maxWidth};
        width: 90%;
    }
}

background-color: ${ColorBg.primaryColor};
color: white;

display: flex;
flex-direction: column;
align-items: center;
padding: 0  20px 45px 20px;


.title{
    text-align: center;
    padding: 50px 0;

}

.form_element{
    width: 100%;
    position: relative;


    .motto{
        display: none;
    }

    ${theme.breakpoints.up("md")}{
        display: flex;
        flex-direction: column;
       
        align-items: center;
        width: 50%;


        .motto{
            display: block;
            margin-bottom: 100px;
            font-style: italic;
            font-size: 20px;
            
        }

        .title{
            text-align: left;
        }


        .textarea{
            width: 100%;
        }


        .form_input{
            ${theme.breakpoints.up("md")}{
                display: flex;
                gap: 30px;
                width: 100%;
               

                div{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }
                
               
            }
        }
    }
}

`;




export const Button = styled.button`
background-color: transparent;
padding: 14px 90px;
border: none;
font-weight: bold;
color: white;
border: 1px solid white;
cursor: pointer;
transition: .3s;
width: 100%;

${theme.breakpoints.up("md")}{
    width:  200px;
    text-align: center;
    padding: 15px 0;
}


&:hover{
    color: ${ColorBg.primaryColor};
    box-shadow: inset 240px 0 0 0 white;
    
}
`;


export const PhotoRight = styled.div`
display: none;

${theme.breakpoints.up("md")}{
    display: block;
    width: 50%;
    height: 560px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
`;


export const Img = styled.img`

`;
