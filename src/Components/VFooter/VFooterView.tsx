import React, { PropsWithChildren } from "react";
import * as Style from "./VFooter";
import telefon from "../../Icons/contact/telefon.svg";
import email from "../../Icons/contact/email.svg";
import facebook from "../../Icons/social_media/facebook.svg";
import logo from "../../Icons/logo/logo.svg";


type Props = {
    id?: string
}


const time = new Date().getFullYear();

const navbar = ["Accueil", "Qui sommes-nous", "Nos Travaux", "prestations de service", "Contactez-nous"];


export const VFooter: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    return (

        <Style.Footer>
            


            <Style.Map>
            <iframe src="https://www.google.com/maps/d/embed?mid=1TqoUaL0t0XP6MQHZLY087Anq8Cfm6X0&ehbc=2E312F" ></iframe>
            </Style.Map>




            <Style.ElementFooter>


                <ul>
                    <li className="logo">
                        <Style.Href className="logo" href="/"><img src={logo} alt="logo" /></Style.Href>
                    </li>
                </ul>


                <ul>
                {navbar.map((item, i) =>{
                     return <Style.Li key={i}><Style.Href className="footer_link" href={`#${item}`}>{item}</Style.Href></Style.Li>
               })}
                </ul>


                <ul className="contact">
                    <li>Contact</li>
                    <li><span><img src={telefon} alt="" /></span><span><Style.Href href="tel:+33 667054384">+33 667054384</Style.Href></span></li>
                    <li><span><img src={email} alt="" /></span> <span>gowperformance@gmail.com</span></li>
                </ul>


                <ul className="urmariti">
                    <li>Suivez-nous:</li>
                    <li><Style.Href target="_blank" href="https://www.facebook.com/VillefrancheReprogrammation"><img src={facebook} alt=""  /></Style.Href></li>
                    <li></li>
                    <li></li>
                </ul>


            </Style.ElementFooter>

            <hr />


            <div className="all_right">
                <p>© {time} Tous les droits sont réservés.</p>
            </div>



       </Style.Footer>

    )

}