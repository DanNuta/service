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

               <Style.BagroundElement>
                  <img src={props.img} />
                  <h3>{props.title}</h3>



            <Style.HoverElement className="hover_element">
                <img src={props.img} alt="" />
                <p>{props.desc}</p>
           </Style.HoverElement>


               </Style.BagroundElement>





          

           </Style.VServicii>
              

           <VButton href="#Contacte">Contacteaza-ne</VButton>


           

    </Style.ElementCard>

          )

   
}