import { style } from "@mui/system";
import styled from "styled-components";
import {theme} from "../../Css/BreackPoints";
import { Width } from "../../Css/Varibla";

type Props = {
  width?: string
}

export const SocialMedia = styled.div`
display: none;

${theme.breakpoints.up("md")}{

position: absolute;
bottom: 50px;
display: flex;
justify-content: center;
width: 90%;
max-width: ${Width.maxWidth};
margin: auto;
left: 50%;
transform: translateX(-50%);
color: white;
}

`;




export const SocialIcon = styled.div`

${theme.breakpoints.up("md")}{
  width: 50%;
  display: flex;
  align-items: center;
  gap: 15px;


}
 
  
`;



export const SocialMediaDiv = styled.div<Props>`
  width: ${props => props.width && props.width};
  height: 1px;
  background-color: white;
`



export const ImageDown = styled.img`

`;






