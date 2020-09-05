import React from "react"
import Friends from "./Friends/Friends"
import './Dialogs.sass'
import Chat from "./Chat/Chat";

const Dialogs = ({messagesData, friendsData}) => {
    return (
        <>
            <Friends friendsData={friendsData.friendsData}/>
            <Chat name="Аделия Шаяхметова" messagesData={messagesData.messagesData}/>
        </>
    )
}

export default Dialogs