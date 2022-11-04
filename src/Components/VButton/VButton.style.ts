import styled from "styled-components";
import { ColorBg } from "../../Css/Varibla";



type Props = {
    bg?: string
    color?: string

}


export const Button = styled.a<Props>`

    background-color: ${props => props.bg ? props.bg : "transparent"};
    display: grid;
    place-content: center;
    width: 150px;
    height: 50px;
    border: none;
    font-weight: bold;
    color: ${props => props.color ? props.color : "white"};
    ${props => !props.bg && "border: 1px solid white"};
    cursor: pointer;
    transition: all .5s;
    border: 1px solid white;

    &:hover{
        box-shadow: inset 160px 0 0  ${props => props.bg ? ColorBg.primaryColor : "white"};
        border: 1px solid ${props => props.bg ? ColorBg.primaryColor : "trasnparent"};
        color: ${props => props.bg ? "white" : ColorBg.primaryColor};
    }
`