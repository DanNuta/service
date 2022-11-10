import styled from "styled-components";
import {theme} from "../../Css/BreackPoints";


type Props = {
    err?: boolean
}

export const LabelInput = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 45px;
position: relative;

${theme.breakpoints.up("md")}{
    margin-bottom: 60px;
}




img{
    position: absolute;
    right: 25px;
}

p{
    color: red;
    margin-top: 3px;
    position: absolute;
    top: 35px;
}


`;


export const Input = styled.input<Props>`
    border: none;
    border-bottom: 1px solid ${props => props.err ? "red" : "white"};
    background-color: transparent;
    outline: none;
    color: white;
    height: 30px;
    position: relative;
  
   
    &::placeholder{
        color: white;
        padding-left: 12px;
        position: relative;
        top: 0;
        font-family: 'Rubik', sans-serif;
    }
`