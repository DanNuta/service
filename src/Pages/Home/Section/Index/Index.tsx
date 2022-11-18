import React, { useState, useEffect } from "react";
import * as Style from "./Index.style";
import bg from "../../../../Icons/bg/bg.png";
import { Container, Grid } from "@mui/material";
import bg2 from "../../../../Icons/bg/bg2.jpg";
import bg3 from "../../../../Icons/bg/bg3.jpg";
import { VButton } from "../../../../Components/VButton/VButton";
import { theme } from "../../../../Css/BreackPoints";
import email from "../../../../Icons/contact/email.svg";
import tel from "../../../../Icons/contact/telefon.svg";
import arrow_right from "../../../../Icons/arrow/next.svg";
import arrow_left from "../../../../Icons/arrow/prev.svg";
import insta from "../../../../Icons/social_media/instagram.svg";
import facebook from "../../../../Icons/social_media/facebook.svg";
import mercedes from "../../../../Icons/bg/bg.png";
const bgImages = [bg, bg2, bg3];

export const Index: React.FC = () => {
  const [pxTouchState, setPxTouchState] = useState(0);
  const [imgBg, setImgBg] = useState(bgImages[0]);
  const [translate, setTranslate] = useState(0);
  const [indexImg, setIndexImg] = useState(1);

  const [curentImg, setCurentImg] = useState(0);


 






  

  return (
    <>
      <Style.SectionIndex id="Accueil">
        {/* <img className="bg_images" src={imgBg} alt="" /> */}

     <Style.ComponentsImgSlider>


        <Style.DivImg>
              <img src={mercedes} />
            </Style.DivImg>

    </Style.ComponentsImgSlider>

        <Style.TextHover>
          <Style.TextElement>

            <h1>GowPerformance</h1>

            <p className="motto">GowPerformance Donnez une seconde chance à votre voiture </p>

            <div className="btn_desk">
              <VButton color="black" bg="white" href="#Contactez-nous">
                Contact
              </VButton>
            </div>
           
          </Style.TextElement>

      

          
        </Style.TextHover>

        



      </Style.SectionIndex>
    </>
  );
};
