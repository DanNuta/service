
import styled from "styled-components";
import {theme} from "../../../../Css/BreackPoints";
import {ColorBg} from "../../../../Css/Varibla";



type Props = {
    slide?: number,
    sliderPX?: number ,
    dimension?: number
}

export const SectionGalery = styled.section`
background-color: ${ColorBg.primaryColor};
color: white;
.title{
    text-align: center;
    padding: 20px 0;
}
`;




export const ArrowSlider = styled.div`
display: flex;
justify-content: center;
margin-top: 15px;
gap: 20px;


img{
    width: 50px;
    cursor: pointer;
}
`;




export const SliderGalery = styled.div<Props>`
display: flex;
width: 100%;
transform: ${props => `translateX(-${props.slide}px)`};
transition: .3s ease-in;

${theme.breakpoints.up("md")}{

    width: ${props => props.dimension && `calc(${(props.dimension-60) / 3+"px"})`};
    gap: 30px;
    
}


`;



export const ImgesItem = styled.div<Props>`
min-width: 100%;
width: 90%;
padding: 0 20px;
aspect-ratio: 1/1;


${theme.breakpoints.up("md")}{
    transition: .5s;
    height: 500px;
    padding: 0;
    &:hover{
        transform: scale(1.2);
        transition: .5s;
    }
}




img{
    height: 100%;
    object-fit: cover;
    width: 100%;
    box-shadow: 0px 8px 10px 0px rgba(247, 250, 248,0.15);

   

    ${theme.breakpoints.up("md")}{
        width: 100%;
    }
}
`;



export const BackroundElement = styled.div`


`;