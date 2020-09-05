import React from 'react'
import './PostWrite.sass'
import Posts from "./Posts/Posts";
const PostWrite = ({postData}) => {

    return (
        <>
            <form action="" className="" className="write__post">
                <textarea placeholder="Что думаете?" name="" id="" cols="85" rows="5"></textarea>
                <button type="submit">
                    Отправить!
                </button>
            </form>
            <Posts postData={postData}/>
        </>
    )
}

export default PostWrite