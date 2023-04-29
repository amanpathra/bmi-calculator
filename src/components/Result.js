import React from 'react';
import downArrow from '../imgs/Down-Arrow-PNG-Image.png'

const Result = (props) => {

    const setArrow = (bmi, elem) => {
        if(bmi<18.5){
            elem.style.left = '12.5%'
        } else if ((bmi > 18.5 && bmi < 25)){
            elem.style.left = '37.5%'
        } else if ((bmi > 25 && bmi < 30)){
            elem.style.left = '62.5%'
        } else {
            elem.style.left = '87.5%'
        }
    }

    setArrow(props.BMI, document.querySelector('.arrow img'))

    return (
        <div className='result'>
            <h3>Your BMI is</h3>
            <span>{Math.round(props.BMI * 100) / 100}</span>
            <div className="arrow">
                <img src={downArrow} alt="" />
            </div>
            <div className="meter">
                <div className={`meterBox${props.BMI < 18.5 ? ' highlight' : ''}`}>Underweight</div>
                <div className={`meterBox${(props.BMI > 18.5 && props.BMI < 25) ? ' highlight' : ''}`}>Normal</div>
                <div className={`meterBox${(props.BMI > 25 && props.BMI < 30) ? ' highlight' : ''}`}>Overweight</div>
                <div className={`meterBox${(props.BMI > 30) ? ' highlight' : ''}`}>Obese</div>
            </div>
        </div>
    )
}

export default Result;