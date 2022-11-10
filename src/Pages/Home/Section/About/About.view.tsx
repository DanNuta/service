import React from "react";
import * as Styled from "./About.style";
import carAbout from "../../../../Icons/about/about.png";


export const AboutView: React.FC = () =>{

    return (
        <Styled.About id="Qui%20sommes-nous">
            <h2 className="title_desktop">Qui sommes-nous?</h2>

            <Styled.LeftPhoto>
                <img src={carAbout} alt="" />
            </Styled.LeftPhoto>

            <Styled.RightPhoto>
                <h2 className="title">Qui sommes-nous?</h2>
                <p className="about_text">Inițial, începând cu anul 1500, textul Lorem Ipsum era utilizat numai în tipografii, de către culegători. În prezent, datorită apariției și utilizării globale a computerelor, textul Lorem ipsum este utilizat pentru a simula orice text cu aspect neutru, atât pentru lucrări tipografice cât și pentru orice alte lucrări care presupun text - în web design, design pentru logo-uri corporative, ștampile etc. Inițial, începând cu anul 1500, textul Lorem Ipsum era utilizat numai în tipografii, de către culegători. În prezent, datorită apariției și utilizării globale a computerelor, textul.</p>
            </Styled.RightPhoto>
        </Styled.About>
    )
}