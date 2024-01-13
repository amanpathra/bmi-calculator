import React, { useContext } from 'react'
import { AllContext } from '../context/AllContext'

const Form = () => {

    const { unitSystem, setUnitSystem, gender, setGender, HnW, setHnW } = useContext(AllContext);

    const changeUS = (e) => {
        setUnitSystem(e.target.innerHTML[0])
    }

    const changeGender = (e) => {
        setGender(e.target.innerHTML)
    }

    const handleChange = (e) => {
        if(e.target.name === 'height'){
            setHnW({ height: e.target.value, weight: HnW.weight })
        }else{
            setHnW({ height: HnW.height, weight: e.target.value })
        }
    }

    return (
        <div className='form'>
            <div className="units">
                <button onClick={changeUS} className={`unitBtn${unitSystem==='M'?' activeSys':''}`}>Metric</button>
                <button onClick={changeUS} className={`unitBtn${unitSystem==='I'?' activeSys':''}`}>Imperial</button>
            </div>
            <div className="details">
                <div className='box' id='box1'>
                    <div>
                        <button onClick={changeGender} className={`genderBtn${gender==='M'?' active':''}`}>M</button>
                        <button onClick={changeGender} className={`genderBtn${gender==='F'?' active':''}`}>F</button>
                    </div>
                    <span>Gender</span>
                </div>
                <div className='box' id='box2'>
                    <div>
                        <input type="number" />
                    </div>
                    <span>Age (years)</span>
                </div>
                <div className='box' id='box3'>
                    <div>
                        <input type="number" name='height' onChange={handleChange}/>
                    </div>
                    <span>Height ({unitSystem==='M'?'cm':'in'})</span>
                </div>
                <div className='box' id='box4'>
                    <div>
                        <input type="number" name='weight' onChange={handleChange}/>
                    </div>
                    <span>Weight ({unitSystem==='M'?'kg':'lbs'})</span>
                </div>
            </div>
        </div>
    )
}

export default Form
