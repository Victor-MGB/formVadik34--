import React, { useState } from "react";
import Addpost from "./Addpost";

const Header = () =>{
    const [openModel, setOpenModel] = useState(false);
    const closeModel = ()=>{
        setOpenModel(false)
    }
    return(
        <header>
            <h1>Personal Blog</h1>
            <button onClick={()=>setOpenModel(!openModel)}>create</button>
            {openModel && <Addpost closeModel={closeModel}/>}
        </header>
    )
}
export default Header;