import styled from "styled-components";
import imageHover from "../../Icons/hover_service/service1.png";
import {theme} from "../../Css/BreackPoints";

export const VServicii = styled.div`
border: 1px solid white;
width: 100%;
height: 300px;
padding: 11px;
margin-top: 30px;
transition: .5s;

${theme.breakpoints.up("md")}{
    width: 400px;
}

 &:hover .hover_element{
    display: block;
    padding: 20px;
    text-align: center;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${imageHover});
    background-position: center center;
    background-size: cover;
    color: white;

    ${theme.breakpoints.up("md")}{
        
        transition-duration: 5s;
    }
 }

`;


export const BagroundElement = styled.div`
border: 1px solid white;
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
position: relative;

h3{
    width: 60%;
    text-align: center;
}
`;


export const ElementCard  = styled.div`

display: flex;
align-items: center;
flex-direction: column;
gap: 30px;

${theme.breakpoints.up("md")}{
   a{
    display: grid;
   }
}


`;


export const HoverElement = styled.div`
display: none;



`;




