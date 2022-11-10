import React, { PropsWithChildren } from "react";
import * as Style from "./VNavbar.style";
import bars from "../../Icons/bars/bars.svg";
import cancel from "../../Icons/bars/cancel.svg";
import {Link} from "react-router-dom";
import { VButton } from "../VButton/VButton";
import email from "../../Icons/contact/email.svg";
import tel from "../../Icons/contact/telefon.svg";
import logo from "../../Icons/logo/logo.svg";



type Props = {
    toggle?: boolean,
    toggleBard?: () => void;
}


const navbar = ["Accueil", "Qui sommes-nous", "Nos Travaux", "prestations de service", "Contactez-nous"];




export const VNavbarView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{
  
  const width = window.screen.width;
  

    {props.toggle && width < 900 ?  document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll"}

 
    return (

      <>

      <Style.Contact>

      <ul>
          <li><img src={email} alt="email"  />gowperformance@gmail.com</li>
          <li><img src={tel} alt="telefon"  /><a href="tel:+33 667054384">+33 667054384</a></li>
      </ul>

      </Style.Contact>

        <Style.Header>

           

            
              <Style.LogoLi><Style.AHref className="logo" href="/"><img src={logo} alt="logo" /></Style.AHref></Style.LogoLi>
              <Style.BarsElement onClick={props.toggleBard}><Style.AHref><img src={bars} alt="" /></Style.AHref></Style.BarsElement>
            


         <Style.Nav  active={props.toggle}>

            <Style.MobileVersionLogoCancel>
              <Style.Li><Style.AHref>logo</Style.AHref></Style.Li>          
              <Style.CancelLi onClick={props.toggleBard}><img src={cancel}></img></Style.CancelLi>
            </Style.MobileVersionLogoCancel> 

            <Style.Ul>

               {navbar.map((item, i) =>{
                 return <Style.Li key={i} onClick={props.toggleBard} active={props.toggle}><Style.AHref href={`#${item}`}>{item}</Style.AHref></Style.Li>
               })}

            </Style.Ul>





            </Style.Nav>



        </Style.Header>

        </>
    )

}