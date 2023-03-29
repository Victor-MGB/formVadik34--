import React, { useState } from 'react';

function Controled(){
    const [inputChange,setInputChange] = useState('')
    const [error,setInputError ] =useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(inputChange.length>=8){
            document.write('submit your form')
        }else{
            setInputError('still remaining more')
        }
    }
    const handleInputChange = (e)=>{
        const value = e.target.value;
        setInputChange(value)
        if(value.length < 8){
            error(`still remaining more`)
        }else{
            setInputError(null)
        }
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputChange}
            placeholder="hdh"
            onChange={handleInputChange}
          />
          {error && <div style={{ color: "red" }}>{error}</div>}
          <button type='submit'>submit</button>
        </form>
      </div>
    );
}

export default Controled;