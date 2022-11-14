import React, { PropsWithChildren } from "react";
import { VButton } from "../VButton/VButton";
import * as Style from "./VServicii";
import imageHover from "../../Icons/hover_service/service1.png";



type Props = {
    id: number,
    title: string,
    desc: string,
    img: any,
}



export const VServiciiView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) =>{






    return (

        <Style.ElementCard>
    
          <Style.VServicii>
            <Style.CardServicii className="card_content">

               <Style.CardFront>
                  <img src={props.img} />
                  <h4>{props.title}</h4>
               </Style.CardFront>



            <Style.CardBack>
                <img src={props.img} alt="" />
                <p>{props.desc}</p>
            </Style.CardBack>



               </Style.CardServicii>
           </Style.VServicii>

           
              

           <VButton href="#Contactez-nous">Contact</VButton>


           

    </Style.ElementCard>

          )

   
}