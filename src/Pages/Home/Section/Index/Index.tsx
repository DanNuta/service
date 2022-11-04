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
import { SocialMediaView } from "../../../../Components/SocialMedia/SocialMedia.View";

const bgImages = [bg, bg2, bg3];

export const Index: React.FC = () => {
  const [pxTouchState, setPxTouchState] = useState(0);
  const [imgBg, setImgBg] = useState(bgImages[0]);
  const [translate, setTranslate] = useState(0);
  const [indexImg, setIndexImg] = useState(1);

  const [curentImg, setCurentImg] = useState(0);


  useEffect(() =>{
    const intervaId =  setInterval(() =>{
     setCurentImg(prev => {
        if(prev === bgImages.length-1){
          return prev = 0;
        }else{
          return prev+1;
        }
      })


      clearInterval(intervaId)
     
    }, 5000)

  }, [curentImg])




 

  // setPxTouchState(prev => prev = move);

  

  return (
    <>
      <Style.SectionIndex id="Accueil">
        {/* <img className="bg_images" src={imgBg} alt="" /> */}

     <Style.ComponentsImgSlider>

        {bgImages.map((item, index) => {
          return (
            <Style.DivImg animate={index === curentImg ? "active" : ""} key={index}>
                {index === curentImg && <img src={item} />}
            </Style.DivImg>
          )
        })}

    </Style.ComponentsImgSlider>

        <Style.TextHover>
          <Style.TextElement>
            <h1>
               GowPerformance spécialiste en reprogrammation moteur, optimisation moteur, conversion éthanol E85
            </h1>

            <div className="btn_desk">
              <VButton color="black" bg="white" href="#Contactez-nous">
                Contacteaza-ne
              </VButton>
            </div>
           
          </Style.TextElement>

          {/* <Style.TouchEventElement
            move={pxTouchState}
            onTouchMove={(e) => touchMove(e)}
          >
            {bgImages.map((item, i) => {
              return (
                <Style.ImgTouchElement
                  className="element_slide"
                  key={i}
                  onClick={(e) => touchStart(e, i)}
                >
                  <img src={item}></img>
                </Style.ImgTouchElement>
              );
            })}
          </Style.TouchEventElement> */}

          <div className="btn">
            <VButton color="black" bg="white" href="#Contacte">
              Contacteaza-ne
            </VButton>
          </div>
        </Style.TextHover>

        <div className="arrow_element">
          {/* <img src={arrow_left} alt="prev" />
          <img src={arrow_right} alt="right" /> */}
        </div>

         <SocialMediaView length={bgImages.length} index={curentImg + 1}/>


      </Style.SectionIndex>
    </>
  );
};
