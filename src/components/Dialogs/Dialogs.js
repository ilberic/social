import React from "react"
import Friends from "./Friends/Friends"
import './Dialogs.sass'
import Chat from "./Chat/Chat";

const Dialogs = ({messagesData, friendsData, addMessage, updateNewMessageText}) => {
    return (
        <>
            <Friends friendsData={friendsData.friendsData}/>
            <Chat
                name="Аделия Шаяхметова"
                messagesData={messagesData.messagesData}
                newMessageText={messagesData.newMessageText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </>
    )
}

export default Dialogs