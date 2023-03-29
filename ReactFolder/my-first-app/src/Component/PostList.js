import React from "react";
import PostItem from "./PostItem";
const PostList = ()=>{
    const post = [{
        id: 1,
        title: 'a page of your work',
        body: 'a full cover'
    },
    {
        id: 2,
        title: 'get another page of your work',
        body: 'a full cover'
    }
]
    return(
        <ul>
            {post.map((post)=>(
                <PostItem key={post.id} post={post}/>
            ))}
        </ul>
    )
}
export default PostList;