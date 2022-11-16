import React from "react";
import * as Styled from "./About.style";
import carAbout from "../../../../Icons/about/about.png";


export const AboutView: React.FC = () =>{

    return (

        <Styled.BackgroundColor id="Qui%20sommes-nous">

            <Styled.About >


                    <h2 className="title_desktop">Qui sommes-nous?</h2>

                    <Styled.LeftPhoto>
                        <img src={carAbout} alt="" />
                    </Styled.LeftPhoto>

                    <Styled.RightPhoto>
                        <h2 className="title">Qui sommes-nous?</h2>
                        <p className="about_text">GowPerformance , spécialiste en reprogrammation moteur, optimisation moteur, conversion éthanol E85, nous intervenons quel que soit votre véhicule ou le type de motorisation, essence, diesel et hybride. Nous effectuons toutes nos reprogrammations sur-mesure artisanale, en utilisant des outils et logiciels professionnels certifiés et reconnus, afin d'étendre nos prestations sur une large gamme de véhicules. Nos optimisations moteur augmentent non seulement l'agrément de conduite, mais permettent aussi de faire une économie de carburant. La conversion superéthanol E85 des voitures essences offre des avantages considérables avec un amortissement de l'investissement rapidement.</p>
                        <p className="motto">"Avec GowPerformance, prenez la route en toute confiance !"</p>

                    </Styled.RightPhoto>

                </Styled.About>
            </Styled.BackgroundColor>
    )
}