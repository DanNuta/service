import styled from "styled-components";


type Props = {
    display?: string,
    height?: string,
    alignItems?: string,
    justifyContent?: string,
    flexDirection?: string,
    gap?: string,
    center?: string,
}


export const displayFlex = (props: Props) =>`
  ${props.display && `display: ${props.display}`};
  ${props.alignItems && `align-items: ${props.alignItems}`} ;
  ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
  ${props.justifyContent && `justify-content: ${props.justifyContent}`};
  ${props.gap && `gap: ${props.gap}`};
`;
