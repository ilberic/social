import React from 'react'
import './Post.sass'
const Post = ({text, likesCount, key}) => {
    return (
        <div className="post col-lg-8">
            <img src="https://sun9-21.userapi.com/72phjrBhQhe23zfHX_f80V5D5aDh4gtUQxnAhg/ROjiwszuWKw.jpg" alt=""/>
            <span>{text}</span>
            <span>♥ {likesCount}</span>
        </div>
    )
}

export default Post