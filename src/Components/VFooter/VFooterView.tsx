import React, { PropsWithChildren } from "react";
import * as Style from "./VFooter";
import telefon from "../../Icons/contact/telefon.svg";
import email from "../../Icons/contact/email.svg";
import facebook from "../../Icons/social_media/facebook.svg";


type Props = {
    id?: string
}


const navbar = ["Accueil", "Qui sommes-nous", "Nos Travaux", "Contactez-nous"];


export const VFooter: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{


    return (

        <Style.Footer>


            <Style.Map>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.420832524765!2d27.59282611586084!3d47.169196526083574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7f92ce0003%3A0x3a77ac5cf5817840!2zU3RyYWRhIE1hcnRhLCBJYciZaSwgUm9tw6JuaWE!5e0!3m2!1sro!2s!4v1667047607928!5m2!1sro!2s"></iframe>
            </Style.Map>




            <Style.ElementFooter>


                <ul>
                    <li className="logo">
                        <Style.Href href="Home">Logo</Style.Href>
                    </li>
                </ul>


                <ul>
                {navbar.map((item, i) =>{
                     return <Style.Li key={i}><Style.Href href={`#${item}`}>{item}</Style.Href></Style.Li>
               })}
                </ul>


                <ul className="contact">
                    <li>Contacte</li>
                    <li><span><img src={telefon} alt="" /></span><span><Style.Href href="tel:+33 06.67.05.43.84">+33 06.67.05.43.84</Style.Href></span></li>
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
                <p>© 2021 All rights reserved.</p>
            </div>



       </Style.Footer>

    )

}