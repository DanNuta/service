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
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.1334356975253!2d4.713428315538438!3d45.98856497911065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f485181a6422fd%3A0xf514453938dbd83e!2sRue%20de%20la%20Paix%2C%2069400%20Villefranche-sur-Sa%C3%B4ne%2C%20Fran%C5%A3a!5e0!3m2!1sro!2s!4v1667598859379!5m2!1sro!2s"></iframe>
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