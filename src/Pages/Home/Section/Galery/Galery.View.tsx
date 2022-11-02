import React, {useEffect, useState} from "react";
import * as Style from "./Galery";
import prevBtn from "../../../../Icons/arrow/next.svg";
import nextBtn from "../../../../Icons/arrow/prev.svg";
import {galery} from "../../../../Icons/icon";


const photo = [galery.img1, galery.img2, galery.img3, galery.img4];

export const GaleryView: React.FC = (props) =>{


    const [stateTrasnlate, setStateTrasnlate] = useState(0);

    const [sliderWidth, setSliderWidth] = useState("530px")


    const [mouveState, setMouveState] = useState(0);
    let clientX = 0;
    

    const touchStart = (e: React.TouchEvent<HTMLDivElement>) =>{

        clientX = e.changedTouches[0].clientX;

        console.log(e)
        
    }



    const touchMouve = (e: React.TouchEvent<HTMLDivElement>) =>{

       const w =  (clientX - e.changedTouches[0].clientX);

       console.log(w)


        setStateTrasnlate(prev => {return prev = w});

        
    }


    const touchEnd = (e: React.TouchEvent<HTMLDivElement>) =>{

        const imgGalery = document.querySelector(".galery_img");
        const w = imgGalery?.getBoundingClientRect().width;
       

       
        if(w !== undefined){

            const l = w * photo.length;
            
            if(mouveState > l){
                setMouveState(prev => {
                    return prev = l
                })

                console.log(mouveState, "Mouse");

            }else{
                setMouveState(prev => {
                    return prev = stateTrasnlate
                })


                console.log(stateTrasnlate, "MousePX")
            }


        }

    }



    const dimension = window.screen.width;
    const length = photo.length % 3;


    const btnNext = () =>{
        const imgGalery = document.querySelector(".galery_img");
        const w = imgGalery?.getBoundingClientRect().width;
       


        if( w !== undefined){
            let l = w * (photo.length-1);
            const total = length * w;


            if(total == stateTrasnlate){
                console.log(total, length)
                setStateTrasnlate(prev => {
                    return prev = 0;
                })
            }else{
                setStateTrasnlate(prev => {
                    return prev +=w;
                })
            }
        }
    }



   


    const btnPrev = () =>{
        const imgGalery = document.querySelector(".galery_img");
        const w = imgGalery?.getBoundingClientRect().width;

       

        if( w !== undefined){
            let l = w * (photo.length-1);

           


            if(stateTrasnlate === length * w){
                   
                console.log(stateTrasnlate)
                setStateTrasnlate(prev => {
                    return prev -=w;
                })
            }else{
                setStateTrasnlate(prev => {
                    return prev =  length * w;
                })
            }
        }
    }










    

  




    return (
        <Style.SectionGalery id="Portfolio">
            <h1 className="title">Galery</h1>


            <Style.SliderGalery slide={stateTrasnlate}
                                onTouchStart={(e) => touchStart(e)}
                                onTouchMove={(e) => touchMouve(e)}
                                onTouchEnd={(e) => touchEnd(e)}
                                sliderPX={sliderWidth}
                                dimension={dimension}
                                >

                {photo.map((item, i) => {
                    return(<Style.ImgesItem    key={i} className="galery_img"><img src={item}/></Style.ImgesItem>)
                })}
                
            </Style.SliderGalery>

            <Style.ArrowSlider>

                
                 <img src={nextBtn} onClick={btnPrev}  alt="" />
                <img src={prevBtn} onClick={btnNext} alt="" />
            </Style.ArrowSlider>


        </Style.SectionGalery>
    )
}