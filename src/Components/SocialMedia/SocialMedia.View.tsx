import React, {PropsWithChildren} from "react";
import * as Style from "./SocialMedia.style";
import down from "../../Icons/arrow/coolicon.svg";
import facebook from "../../Icons/social_media/facebook.svg";
import insta from "../../Icons/social_media/instagram.svg";

type Props = {
  index?: number,
  length?: number
}

export const SocialMediaView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return (
    <Style.SocialMedia>

        <Style.ArrowDown>

        <a href="#Qui%20sommes-nous"><Style.ImageDown src={down}></Style.ImageDown></a>
            
        </Style.ArrowDown>

      <Style.SocialIcon>

        <Style.SocialMediaDiv width="35%"></Style.SocialMediaDiv>

        <a href="https://www.facebook.com/VillefrancheReprogrammation" target="_blank"><Style.ImageDown src={facebook}></Style.ImageDown></a>

            <Style.SocialMediaDiv width="15%"></Style.SocialMediaDiv>
            <Style.ImageDown src={facebook}></Style.ImageDown>
          
        <Style.SocialMediaDiv width="35%"></Style.SocialMediaDiv>
      </Style.SocialIcon>


      <Style.NumberSlide>
          <Style.Number>{props.index}/{props.length}</Style.Number>
      </Style.NumberSlide>

    </Style.SocialMedia>
  );
};
