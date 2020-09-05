import React from "react"
import Post from "./Post/Post";


const Posts = ({postData}) => {
    let newArr = postData.map(post => <Post key={post.id} text={post.text} likesCount={post.likesCount}/>);
    return (
        <>
            {newArr}
        </>
    )
}

export default Posts