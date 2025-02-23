import React, { useEffect, useRef, useState } from "react";
import SliderItem from "./Slideritem";
import sliderimg from "../../../img/man.png"

const doctors=[{name:"test1",Specialization:"test1",img:sliderimg},{name:"test2",Specialization:"test2",img:sliderimg},{name:"test3",Specialization:"test3",img:sliderimg}];

export default function Slider(){
    const [currentindex,setindex]=useState(0);
    const intervalRef=useRef(null);

    const startAutoSlider = () => {
        intervalRef.current = setInterval(() => {
            setindex((prevIndex) => (prevIndex + 1) % doctors.length);
        }, 4000);
    };

    const stopAutoSlider = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current=null;
        }
    }

    useEffect(() => {
        startAutoSlider();
        return () => {
          if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const goToNext = () => {
        stopAutoSlider();
        setindex((prevIndex) => (prevIndex + 1) % doctors.length);
        setTimeout(startAutoSlider,100);
    };

    const goToPrev = () => {
        stopAutoSlider();
        setindex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
        setTimeout(startAutoSlider,100);
    };
    return(
        <div className="sliderContainer">
            <div className="sliderdark Flexable">
                <button className="btnslider removeBackground" onClick={goToNext}>&lt;</button>
                <div className="slider Flexable">
                    {
                        doctors.map((doctor,index)=>{
                            let className="slideritem Flexable";
                            if(index === (currentindex + 1) % doctors.length){
                                className+=" next";
                            }
                            else if(index === (currentindex - 1 + doctors.length) % doctors.length){
                                className+=" prev";
                            }
                            else if(index===currentindex){
                                className += " active";
                            }
                            return(<SliderItem className={className} key={doctor.name} name={doctor.name} Specialization={doctor.Specialization} img={doctor.img}></SliderItem>);
                        })
                    }
                </div>
                <button className="btnslider removeBackground" onClick={goToPrev}>&gt;</button>
            </div>
        </div>
    );
}