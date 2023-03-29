import React, { useEffect, useState } from 'react';
function HookMouse() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0)
    const [display,setDisplay] =  useState(true)

    const logistic =(e)=>{
        console.log('i am logically made');
        setX(e.clientX);
        setY(e.setY)
    }

    useEffect(()=>{
        console.log('i am ');
        window.addEventListener('mousemove' ,logistic)

        return () =>{
            console.log('again stop');
            window.removeEventListener('mousemove',logistic)
        }
    },[])
    return (
      <div>
        <div>
          X-{x} Y-{y}
        </div>
        <button onClick={()=>setDisplay(!display)}>movemenet</button>
      </div>
    );
}
export default HookMouse;