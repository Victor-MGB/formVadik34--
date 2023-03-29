import React, { useEffect, useState } from "react";
function Hooks(){
    const [items,setItem] = useState([])
    const addItem = (e) =>{
        setItem([
            ...items,{
                id: items.length,
                value: Math.floor(Math.random()*1000) *23
            }
        ])
    }
    useEffect(()=>{
        console.log('mgbemena victor');
    })
    return(
        <div>
            <button onClick={addItem}>click</button>
            {
                items.map(item=>(
                    <li key={item.id}>{item.value}</li>
                ))
            }
        </div>
    )
}
export default Hooks