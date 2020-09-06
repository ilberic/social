import React from 'react'
import './PostWrite.sass'
import Posts from "./Posts/Posts";

const PostWrite = ({postData, addPost}) => {

    let newPostElement = React.createRef();

    let addPostFunc = () => {
        let text = newPostElement.current.value;
        addPost(text);
        newPostElement.current.value = ''
    }
    return (
        <>

            <div className="write__post">
                <textarea ref={newPostElement} placeholder="Что думаете?" name="" id="" cols="85" rows="5"></textarea>
                <button onClick={addPostFunc}>
                    Отправить!
                </button>
            </div>
            <Posts postData={postData}/>
        </>
    )
}

export default PostWrite