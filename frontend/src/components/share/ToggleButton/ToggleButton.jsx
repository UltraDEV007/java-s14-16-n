import React, { useState, useEffect } from 'react';
import './toggleButton.css'



function ToggleButton({ options }) {

    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
    useEffect(() => {
        setSelectedOptionIndex(0);
    }, []);
    const handleChange = () => {


        setSelectedOptionIndex(prevIndex => (prevIndex === 0 ? 1 : 0));


    };
    console.log('Opción seleccionada:', options[selectedOptionIndex]);
    return (
        <>
            <div className='toggleContainer'>
                <div className={`toggleOptions ${selectedOptionIndex === 0 ? 'activeOn' : ''}`}>
                    <p style={{fontSize:'12px', fontWeight:'500', lineHeight:'16px'}}>{options[0]}</p>
                </div>
                <label className="switch">
                    <input type="checkbox"
                        checked={selectedOptionIndex === 1}
                        onChange={handleChange}>
                    </input>
                    <span className="slider"></span>
                </label>
                <div className={`toggleOptions ${selectedOptionIndex === 1 ? 'activeOn' : ''}`}>
                    <p style={{fontSize:'12px', fontWeight:'500', lineHeight:'16px'}}>{options[1]}</p>
                </div>
            </div>

        </>
    )
}

export default ToggleButton
