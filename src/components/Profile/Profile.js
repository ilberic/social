import React from "react"
import Photo from "./Photo/Photo"
import Info from "./Info/Info"
import PostWrite from "./PostWrite/PostWrite"

const Profile = ({addPostUI, postData, addPostBLL}) => {
    return (
        <>
            <Photo/>
            <Info/>
            <PostWrite postData={postData.postData} addPostUI={addPostUI} addPostBLL={addPostBLL}/>
        </>
    )
}

export default Profile