import React, { useState } from "react";
const Addpost = ({closeModel}) =>{
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [error,setError] = useState(false);

    const validateInputs = (e) =>{
        e.preventDefault();

        if(!title || !body) 
            return setError('fill up the entire field')
        console.log({title,body})
        closeModel()
    }
    return(
        <>
        <form onSubmit={validateInputs}>
            <input
            type="text"
            placeholder="enter title"
            onChange={(e)=>setTitle(e.target.value)}
            />
            <br/>
            <textarea 
            placeholder="enter body message" 
            onChange={(e)=>setBody(e.target.value)}></textarea>
            <br/>

            <button type="submit">submit</button>
            {error && <p>{error}</p>}
        </form>
        </>
    )
}
export default Addpost;