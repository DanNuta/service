import React, { useState } from "react";
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

const bgImages = [bg, bg2, bg3, bg, bg2, bg3];

export const Index: React.FC = () => {
  const [pxTouchState, setPxTouchState] = useState(0);
  const [imgBg, setImgBg] = useState(bgImages[0]);
  const [translate, setTranslate] = useState(0);
  const [indexImg, setIndexImg] = useState(1);

  const touchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const value = window.screen.width - e.changedTouches[0].clientX;

    if (pxTouchState > 300) {
      setPxTouchState((prev) => (prev = 300));
    } else {
      setPxTouchState((prev) => value);
    }
  };


 

  // setPxTouchState(prev => prev = move);

  const touchStart = (e: any, index: number) => {
    const elementSlide = document.querySelector(".element_slide");
    const w = elementSlide?.getBoundingClientRect().width;

    if (w !== undefined) {
      setImgBg(e.target.src);

      setTranslate((prev) => {
        return (prev += w);
      });

      console.log(e.target.src);
    }

    setIndexImg(index)
  };

  return (
    <>
      <Style.SectionIndex id="Home">
        <img className="bg_images" src={imgBg} alt="" />

        <Style.TextHover>
          <Style.TextElement>
            <h1>
              WELL RICH intră în forță pe piața Republicii Moldova aducând noi
              tendințe și viziuni!
            </h1>

            
              <VButton color="black" bg="white" href="#Contacte">
                Contacteaza-ne
              </VButton>
           
          </Style.TextElement>

          <Style.TouchEventElement
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
          </Style.TouchEventElement>

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

         <SocialMediaView length={bgImages.length} index={indexImg + 1}/>


      </Style.SectionIndex>
    </>
  );
};
