
import styled from "styled-components";
import {theme} from "../../../../Css/BreackPoints";



type Props = {
    slide?: number,
    sliderPX?: number ,
    dimension?: number
}

export const SectionGalery = styled.section`
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
aspect-ratio: 1/1;

${theme.breakpoints.up("md")}{
    transition: .5s;
    height: 500px;
    &:hover{
        transform: scale(1.2);
        transition: .5s;
    }
}




img{
    height: 100%;
    object-fit: cover;
    width: 100%;
}

`