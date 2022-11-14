import React, { PropsWithChildren } from "react";
import * as Style from "./Servicii";
import service2 from "../../../../Icons/servicii/second_sevice.svg";
import service1 from "../../../../Icons/servicii/first_sevice.svg";
import service3 from "../../../../Icons/servicii/therd_service.svg";
import service4 from "../../../../Icons/servicii/four_service.svg";
import service5 from "../../../../Icons/servicii/five_service.svg";
import { VServiciiView } from "../../../../Components/VServicii/VServiciiView";



const serviciiItem = [
    {
        id: 1,
        title: "Reprogrammation moteur ",
        img: service2,
        desc: "L'optimisation de la cartographie de votre voiture peut permettre d'avoir plus de puissance, plus de couple tout en réduisant la consommation.Nos reprogrammations sont faites de manière professionnelle grace à un ingénieur motoriste qui connait parfaitement son métier garantissant un maintien de la fiabilité du véhicule. Nous reprogrammons toutes les marques de voitures. N'hésitez pas à nous contacter"
    },

    {
        id: 2,
        title: "CONVERSION AU BIOÉTHANOL E85",
        img: service1,
        desc: "GowPerformance est spécialisé dans la reprogrammation moteur et la transformation au Bio Éthanol E85.Aucun appareil ni dispositif ne sera rajouté à votre véhicule, en effet nous créons une cartographie sur mesure exactement comme le font les constructeurs qui propose cela de série.Il faut changer des pièces pour pouvoir rouler à l’éthanol : Tout dépend du véhicule, si la plupart du temps il n'est pas nécessaire de changer des pièces cela peut parfois être nécessaire surtout si on veut coupler cela à un stage 1 (augmentation de la puissance). On peut parfois être amené à changer la pompe à essence ou dans de rares cas les injecteurs. L'opération s'avère tout de de même avantageuse vu que l'E85 coûte beaucoup moins cher que le super classique. Vous pourrez ainsi économiser jusqu'à 60 € par plein ! Vous pouvez de plus accoupler cela avec une reprogrammation stage 1 et augmenter par la même occasion la puissance du véhicule."
    },

    {
        id: 3,
        title: "Solutions AdBlue",
        img: service3,
        desc: "Notre garage propose la solutions du système AdBlue. Sachez qu’il est aujourd’hui possible de désactiver et supprimer l’AdBlue dans le calculateur pour les constructeurs auto. De plus, nous vous proposons des solutions sur-mesure afin de pouvoir circuler sans AdBlue, et ce, en répondant aux normes anti-pollution."
    },

    {
        id: 4,
        title: "Solutions FAP ( Filtre à particules )",
        img: service4,
        desc: "Solutions électronique du Filtre à Particule (sur place, à domicile ou au bureau)."
    },

    {
        id: 5,
        title: "Solutions Vanne EGR",
        img: service5,
        desc: "Notre équipe de techniciens peut supprimer, désactiver la vanne EGR.  Elle se charge également de la reprogrammation du calculateur de la gestion moteur. Cela vous permet de régler de façon définitive les problèmes causés par la vanne EGR et de retrouver un véhicule fonctionnant comme au premier jour. Cependant, les experts déconseillent la suppression de la vanne EGR. Vous pouvez alors la remplacer, la décrasser ou procéder à un nettoyage professionnel. Cette dernière résolution est, d'un autre côté, moins coûteuse."
    }
]


export const Servicii: React.FC = (props: PropsWithChildren) =>{

    return <Style.Servicii id="prestations%20de%20service">

        <Style.MarginElement>

           <h1 className="title">Prestations de service</h1>

           <p className="motto">Avec GowPerformance, prenez la route en toute confiance !</p>


           <Style.ServiciiElement>

           {serviciiItem.map((item, i) => {


             return <VServiciiView key={i} {...item}></VServiciiView>

           })}


       </Style.ServiciiElement>


       </Style.MarginElement>

          </Style.Servicii>
}