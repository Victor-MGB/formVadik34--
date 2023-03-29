import React, { useState } from "react";
import "./StyleStep1.css"

function Step1(){
    const [state,setState] = useState({
        email: "",
        password: ""
    })
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(state);
    }
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setState((prevProps)=>({
            ...prevProps,
            [name]: value
        }))
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="enter your email email"
              value={state.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="enter your email password"
              value={state.email}
              onChange={handleInputChange}
            />
          </div>

          <div  className="form-control">
            <label></label>
          </div>
          <button type="submit">submit form</button>
        </form>
      </div>
    );
}
export default  Step1;