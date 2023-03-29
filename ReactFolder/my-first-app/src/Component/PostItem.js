import React from "react";
const PostItem =({post:{title,id,body}})=>{
    return(
        <li>
            <h2>{title}</h2>
            <p>{body}</p>
            <div>
                <span className="edit"></span>
                <span className="trash"></span>
            </div>
        </li>
    )
}
export default PostItem;