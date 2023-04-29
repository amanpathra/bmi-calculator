import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Header from './components/Header';
import Result from './components/Result';

function App() {

    const [unitSystem, setUnitSystem] = useState('M')
    const [HnW, setHnW] = useState({ height: null, weight: null })
    const [BMI, setBMI] = useState(null)

    return (
        <div className="App">
            <Header />
            <div className="main">
                <div className="left">
                    <Form setHnW={setHnW} HnW={HnW} unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
                    <Button HnW={HnW} setBMI={setBMI} unitSystem={unitSystem} />
                </div>
                <div className="right">
                    <Result BMI={BMI} />
                </div>
            </div>
        </div>
    );
}

export default App;