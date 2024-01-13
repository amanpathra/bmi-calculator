import { createContext, useState } from "react";

export const AllContext = createContext();

const AllContextProvider = (props) => {
    
    const [unitSystem, setUnitSystem] = useState('M');
    const [HnW, setHnW] = useState({ height: null, weight: null });
    const [BMI, setBMI] = useState(null);
    const [gender, setGender] = useState('M');

    return (
        <AllContext.Provider value={{unitSystem, setUnitSystem, HnW, setHnW, BMI, setBMI, gender, setGender}}>
            {props.children}
        </AllContext.Provider>
    )
}

export default AllContextProvider;