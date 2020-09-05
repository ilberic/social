import React from "react"
import FriendsItem from "./FriendsItem/FriendsItem"
import "./Friends.sass"

const Friends = ({friendsData}) => {
    const newFriendsData =
        friendsData.map(friend => <FriendsItem name={friend.name} img={friend.img} id={friend.id}/>);
    return (
        <ul className="friends__list col-lg-3">
            {newFriendsData}
        </ul>
    )
}

export default Friends