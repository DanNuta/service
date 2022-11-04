import React, {useEffect, useState} from "react";
import * as Style from "./Galery";
import prevBtn from "../../../../Icons/arrow/next.svg";
import nextBtn from "../../../../Icons/arrow/prev.svg";
import {galery} from "../../../../Icons/icon";


const photo = [galery.img1, galery.img2, galery.img3, galery.img4];

export const GaleryView: React.FC = (props) =>{


    const dimension = window.screen.width;


    const [stateTrasnlate, setStateTrasnlate] = useState(0);

    const [curretItem, setCurentItem] = useState(2);

    const [sliderWidth, setSliderWidth] = useState(0);


    const [mouveState, setMouveState] = useState(0);
   
           // "galery_img"
    const length = photo.length % 3;


    const btnNext = () =>{
        const imgGalery = document.querySelector(".galery_img");
        const w = imgGalery?.getBoundingClientRect().width;
       

       if(dimension > 900){
        if( w !== undefined){
            let l = w * (photo.length-1);
            const total = length * w;


            if(total == sliderWidth){
               
                setSliderWidth(prev => {
                    return prev = 0;
                })
            }else{
                setSliderWidth(prev => {
                    return prev +=w;
                })
            }
        }
    }else{

        if( w !== undefined){
            let l = w * (photo.length-1);

            setSliderWidth(prev => {
                if(prev === l){
                    return prev = 0;
                }else{
                    return prev += w;
                }
            })

            
        }
        
       
    }
    }



   


    const btnPrev = () =>{
        const imgGalery = document.querySelector(".galery_img");
        const w = imgGalery?.getBoundingClientRect().width;
       

       if(dimension > 900){
        if( w !== undefined){
            let l = w * (photo.length-1);

            console.log(l, w,  "length")
            
            const total = length * w;


            if(sliderWidth == 0){

                setSliderWidth(prev => {
                    return prev = total;
                })
            }else{
                setSliderWidth(prev => {
                    return prev -=w;
                })
            }
        }
    }else{

        if( w !== undefined){
            let l = w * (photo.length-1);

            setSliderWidth(prev => {
                if(prev === 0){
                    return prev = l;
                }else{
                    return prev -= w;
                }
            })

            
        }
        
       
    }
    }



    return (
        <Style.SectionGalery id="Nos%20Travaux">
            <h1 className="title">Nos Travaux</h1>


            <Style.SliderGalery slide={sliderWidth}
                                dimension={dimension}
                                >

                {photo.map((item, i) => {
                    return(<Style.ImgesItem 
                                            key={i} 
                                            className={dimension > 900 && i === curretItem ? "galery_img active" : "galery_img"}
                            >
                            <img src={item}/>
                         </Style.ImgesItem>)
                })}
                
            </Style.SliderGalery>

            <Style.ArrowSlider>

                
                 <img src={nextBtn} onClick={btnPrev}  alt="" />
                <img src={prevBtn} onClick={btnNext} alt="" />
            </Style.ArrowSlider>


        </Style.SectionGalery>
    )
}