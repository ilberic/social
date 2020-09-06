import React from "react"
import Photo from "./Photo/Photo"
import Info from "./Info/Info"
import PostWrite from "./PostWrite/PostWrite"

const Profile = ({addPost, postData, newPostText, updateNewPostText}) => {
    return (
        <>
            <Photo/>
            <Info/>
            <PostWrite postData={postData.postData} addPost={addPost} newPostText={newPostText.newPostText} updateNewPostText={updateNewPostText}/>
        </>
    )
}

export default Profile