import React from "react"
import Photo from "./Photo/Photo"
import Info from "./Info/Info"
import PostWrite from "./PostWrite/PostWrite"

const Profile = ({postData}) => {
    return (
        <>
            <Photo/>
            <Info/>
            <PostWrite postData={postData.postData}/>
        </>
    )
}

export default Profile