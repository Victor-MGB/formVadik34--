import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DataFetching(){
    const [post,setPost]=useState([])

    useEffect(()=>{
        axios.get('')
        .then(res=>{
            console.log(``);
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            <ul>
                {
                    post.map(post=>(
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default DataFetching;