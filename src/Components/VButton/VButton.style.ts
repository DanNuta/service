import styled from "styled-components";



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

    &:hover{
        box-shadow: inset 160px 0 0 0 #54b3d6;
        
    }
`