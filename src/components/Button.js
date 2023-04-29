import React from 'react'

const Button = (props) => {

    const handleClick = () => {
        calcFunc(props.HnW.height, props.HnW.weight, props.unitSystem)
    }

    const calcFunc = (height, weight, unitSystem) => {
        if(unitSystem==='M'){
            props.setBMI(weight/((height/100)**2))
        }else{
            props.setBMI((weight/(height**2))*703)
        }
    }

    return (
        <div className='submitBtn'>
            <button onClick={handleClick}>Calculate</button>
        </div>
    )
}

export default Button