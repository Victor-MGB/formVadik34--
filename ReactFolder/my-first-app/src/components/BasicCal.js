import React, { useState } from "react";
import  './BasicCal.css'

const BasicCal = ()=>{
    const [value,setValue] = useState('');

    const handleChange = (e) =>{
        setValue(e.preVentDefaultValue)
    }

    const handleClick  =(e)=>{
        setValue(value + e.target.value);
    }
    const handleEqual = (e) =>{
        try {
            setValue(eval(value).toString());
        }catch(error){
            setValue('error')
        }
    };
    const handleClear = (e) =>{
        setValue('')
    }
    return(
        <div className="calculator">
            <input type='text' value={value} onChange={handleChange}/>
            {/* button appears here */}
            <div className="button">
            <button value='1' onClick={handleClick}>1</button>
            <button value='2' onClick={handleClick}>2</button>
            <button value='3' onClick={handleClick}>3</button>
            <button value='4' onClick={handleClick}>4</button>
            <button value='5' onClick={handleClick}>5</button>
            <button value='6' onClick={handleClick}>6</button>
            <button value='7' onClick={handleClick}>7</button>
            <button value='8' onClick={handleClick}>8</button>
            <button value='9' onClick={handleClick}>9</button>
            <button value='*' onClick={handleClick}>*</button>
            <button value='+' onClick={handleClick}>+</button>
            <button value='-' onClick={handleClick}>-</button>
            <button value='Clr' onClick={handleClear}>clr</button>
            <button value='0' onClick={handleClick}>0</button>
            <button value='=' onClick={handleEqual}>=</button>
            <button value='%' onClick={handleClick}>%</button>
            </div>
        </div>
    )
}
export default BasicCal;