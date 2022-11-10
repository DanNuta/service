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

&:hover .card_content{
  transform: rotateY(.5turn);
}

${theme.breakpoints.up("md")}{
    width: 400px;
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





export const CardServicii = styled.div`
position: relative;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
transition: transform 1s;
transform-style: preserve-3d;
height: 100%;
`;



export const CardFront = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border: 1px solid white;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;


export const CardBack = styled.div`
  display: grid;
  text-align: center;
  place-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border: 1px solid white;
  overflow-y: scroll;
  backface-visibility: hidden;
  transform: rotateY(.5turn);
  transform-style: preserve-3d;
  background-image: url(${imageHover});
  background-position: center center;
  padding: 20px;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  
`;







