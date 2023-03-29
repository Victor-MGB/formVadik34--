import React, { useState } from 'react';

function Api () {
    const [CounterOne , setCounterOne]=useState(0);
    const [counterTwo,setCounterTwo]  = useState(0)

    const incrementOne = ()=>{
        setCounterOne(CounterOne + 1)
    }
    const incrementTwo =()=>{
        setCounterTwo(counterTwo + 1)
    }
    const iseEven = () =>{
        let i = 0;
        while(i<200000000) i++
        return CounterOne % 2 === 0
    }
    return (
        <div>
           <button onClick={incrementOne}>click one - {CounterOne}</button> 
           <span>{iseEven() ? 'Even': 'odd'}</span>
           <button onClick={incrementTwo}>click two - {counterTwo}</button>
        </div>
    );
}

export default Api;