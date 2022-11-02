import React from "react";
import * as Styled from "./About.style";
import carAbout from "../../../../Icons/about/about.png";


export const AboutView: React.FC = () =>{

    return (
        <Styled.About id="Qui%20sommes-nous">
            <h1 className="title_desktop">Despre noi</h1>

            <Styled.LeftPhoto>
                <img src={carAbout} alt="" />
            </Styled.LeftPhoto>

            <Styled.RightPhoto>
                <h1 className="title">Despre noi</h1>
                <p className="about_text">Inițial, începând cu anul 1500, textul Lorem Ipsum era utilizat numai în tipografii, de către culegători. În prezent, datorită apariției și utilizării globale a computerelor, textul Lorem ipsum este utilizat pentru a simula orice text cu aspect neutru, atât pentru lucrări tipografice cât și pentru orice alte lucrări care presupun text - în web design, design pentru logo-uri corporative, ștampile etc. Inițial, începând cu anul 1500, textul Lorem Ipsum era utilizat numai în tipografii, de către culegători. În prezent, datorită apariției și utilizării globale a computerelor, textul.</p>

                <Styled.ExperienceInCifre>
                    <div>
                        <h1>7 Ani</h1>
                        <h4>Exprerienta</h4>
                    </div>
                    <div>
                        <h1>130 +</h1>
                        <h4>proiecte finalizate</h4>
                    </div>
                    <div>
                        <h1>60 +</h1>
                        <h4>clienti satisfacuti</h4>
                    </div>
                </Styled.ExperienceInCifre>
            </Styled.RightPhoto>
        </Styled.About>
    )
}