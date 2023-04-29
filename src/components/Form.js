import React, {useState} from 'react'

const Form = (props) => {

    const [gender, setGender] = useState('M')

    const changeUS = (e) => {
        props.setUnitSystem(e.target.innerHTML[0])
    }

    const changeGender = (e) => {
        setGender(e.target.innerHTML)
    }

    const handleChange = (e) => {
        if(e.target.name === 'height'){
            props.setHnW({ height: e.target.value, weight: props.HnW.weight })
        }else{
            props.setHnW({ height: props.HnW.height, weight: e.target.value })
        }
    }

    return (
        <div className='form'>
            <div className="units">
                <button onClick={changeUS} className={`unitBtn${props.unitSystem==='M'?' activeSys':''}`}>Metric</button>
                <button onClick={changeUS} className={`unitBtn${props.unitSystem==='I'?' activeSys':''}`}>Imperial</button>
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
                    <span>Height ({props.unitSystem==='M'?'cm':'in'})</span>
                </div>
                <div className='box' id='box4'>
                    <div>
                        <input type="number" name='weight' onChange={handleChange}/>
                    </div>
                    <span>Weight ({props.unitSystem==='M'?'kg':'lbs'})</span>
                </div>
            </div>
        </div>
    )
}

export default Form
