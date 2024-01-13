import React, { useContext, useEffect } from 'react';
import downArrow from '../imgs/Down-Arrow-PNG-Image.png'
import { AllContext } from '../context/AllContext';

const Result = () => {

    const { BMI } = useContext(AllContext);

    const setArrow = (bmi, elem) => {
        console.log(elem)
        if(bmi<18.5){
            elem.style.left = '12.5%'
        }else if((bmi>18.5 && bmi<25)){
            elem.style.left = '37.5%'
        }else if((bmi>25 && bmi<30)){
            elem.style.left = '62.5%'
        }else{
            elem.style.left = '87.5%'
        }
    }

    useEffect(()=>{
        setArrow(BMI, document.getElementById('downArrow'))
        // eslint-disable-next-line
    }, [BMI])

    return (
        <div className='result'>
            <h3>Your BMI is</h3>
            <span>{Math.round(BMI * 100) / 100}</span>
            <div className="arrow">
                <img src={downArrow} alt="" id='downArrow'/>
            </div>
            <div className="meter">
                <div className={`meterBox${BMI<18.5 ? ' highlight' : ''}`}>Underweight</div>
                <div className={`meterBox${(BMI>18.5 && BMI<25) ? ' highlight' : ''}`}>Normal</div>
                <div className={`meterBox${(BMI>25 && BMI<30) ? ' highlight' : ''}`}>Overweight</div>
                <div className={`meterBox${(BMI>30) ? ' highlight' : ''}`}>Obese</div>
            </div>
        </div>
    )
}

export default Result;