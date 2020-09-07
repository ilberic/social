import React from 'react'
import './PostWrite.sass'
import Posts from "./Posts/Posts";

const PostWrite = ({postData, addPost, newPostText, updateNewPostText}) => {

    let newPostElement = React.createRef();

    let addPostFunc = () => {
        addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text);

    }

    return (
        <>

            <div className="write__post">
                <textarea ref={newPostElement}
                          placeholder="Что думаете?"
                          cols="85"
                          rows="5"
                          value={newPostText}
                          onChange={onPostChange}/>
                <button onClick={addPostFunc}>
                    Отправить!
                </button>
            </div>
            <Posts postData={postData}/>
        </>
    )
}

export default PostWrite