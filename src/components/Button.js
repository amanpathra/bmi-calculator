import React, { useContext } from 'react'
import { AllContext } from '../context/AllContext'

const Button = () => {

    const { HnW, unitSystem, setBMI } = useContext(AllContext);

    const handleClick = () => {
        calcFunc(HnW.height, HnW.weight, unitSystem)
    }

    const calcFunc = (height, weight, unitSystem) => {
        if(unitSystem==='M'){
            setBMI(weight/((height/100)**2))
        }else{
            setBMI((weight/(height**2))*703)
        }
    }

    return (
        <div className='submitBtn'>
            <button onClick={handleClick}>Calculate</button>
        </div>
    )
}

export default Button