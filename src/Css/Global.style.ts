import { createGlobalStyle } from 'styled-components';
import {theme} from "../Css/BreackPoints";
import { ColorBg } from './Varibla';


export const GlobalStyle = createGlobalStyle`
 


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  }

  li{
    list-style-type: none;
    font-family: 'Rubik', sans-serif;
  }

  a{
    text-decoration: none;
    color: white;
    font-family: 'Rubik', sans-serif;
  }



  html{
    scroll-behavior: smooth;
  }


  h1{
    font-family: 'Roboto', sans-serif;
    ${theme.breakpoints.up("md")}{
      font-family: 'Roboto', sans-serif;
      font-size: 45px;
    }
  }


  p{
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
  }

  h4{
    font-family: 'Rubik', sans-serif;
    font-size: 20px;
  }

  

  h2{
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    ${theme.breakpoints.up("md")}{
      font-size: 40px;
      font-family: 'Rubik', sans-serif;
    }
  }
  

  
`