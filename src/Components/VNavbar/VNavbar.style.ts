import styled, { keyframes, css }from "styled-components";
import {displayFlex} from "../../Css/Mixin";
import {theme} from "../../Css/BreackPoints";
import {ColorBg} from "../../Css/Varibla";

type Props = {
    active?: boolean,
    time?: number
}


export const Contact = styled.div`

display: none;


${theme.breakpoints.up("md")}{

    display: flex;
    align-items: center;
    justify-content: center;
    height: 75px;
    position: relative;
    z-index:999;
    background-color: ${ColorBg.primaryColor};
    
    ul{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
     
      li{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: white;
      }
    }
   

}

`

export const Header = styled.header`
position: relative;
top: 25px;
z-index: 10;
height: 100%;
padding: 0 20px;

.logo{

  img{

    width: 150px;

  }
}

${theme.breakpoints.up("md")}{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%; 
  max-width: 1660px;
  margin: auto;
}

`


export const Nav = styled.nav<Props>`
position: absolute;
background: rgba(0, 0, 0, 0.6);
backdrop-filter: blur(4px);
color: white;
width: 100%;
transform: ${props => props.active ? "translateX(0)" : "translate(100%)"};
transition: all .3s ease-in-out;
top: -25px;
bottom: 0;
left: 0;
right: 0;
height: 100vh;
padding: 25px 17px 0 15px;


${theme.breakpoints.up('md')}{
  position: relative;
  transform: translateX(0);
  background-color: transparent;
  backdrop-filter: blur(0);
  height: 20px;
  padding: 0;
  
  


}


`;


export const Ul = styled.ul`

margin-top: 60px;

${theme.breakpoints.up("md")}{
  display: flex;
  margin-top: 25px;
  position: absolute;
  gap: 60px;
  right: 0;
}

`;


export const Li = styled.li<Props>`

margin-bottom: 20px;

${theme.breakpoints.up("md")}{
  margin: 0;
}

a{
  text-transform: uppercase;
  font-size: 18px;
}
`;


export const AHref = styled.a`


`


export const BarsElement = styled.li`
position: absolute;
right: 20px;
top: 0;
height: 100%;
height: 100%;

${displayFlex({display: "flex", 
               alignItems: "center",
               justifyContent: "ceneter" 
              })}


${theme.breakpoints.up("md")}{
  display: none;
}

`;

export const CancelLi = styled.li`






`;


export const MobileVersionLogoCancel = styled.ul`
 ${displayFlex({display: "flex",
                justifyContent: "space-between"
 
})}


${theme.breakpoints.up("md")}{
  display: none;
}
`;



export const LogoLi = styled.li`

`
