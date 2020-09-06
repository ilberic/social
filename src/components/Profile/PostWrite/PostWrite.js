import React from 'react'
import './PostWrite.sass'
import Posts from "./Posts/Posts";

const PostWrite = ({postData, addPostBLL, addPostUI}) => {

    let newPostElement = React.createRef();

    let addPostFunc = () => {
        let text = newPostElement.current.value;
        addPostBLL(text);
    }
    return (
        <>

            <div className="write__post">
                <textarea ref={newPostElement} onInput={addPostFunc}  placeholder="Что думаете?" name="" id="" cols="85" rows="5"></textarea>
                <button onClick={addPostUI}>
                    Отправить!
                </button>
            </div>
            <Posts postData={postData}/>
        </>
    )
}

export default PostWrite