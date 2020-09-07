import React from "react"
import "./Chat.sass"
import ChatInput from "./ChatInput/ChatInput";
import Messages from "./Messages/Messages";

const Chat = ({name, messagesData, newMessageText, addMessage, updateNewMessageText} ) => {
    return (
        <div className="chat">
            <span className="chat__title">{name}</span>
            <Messages messagesData={messagesData}/>
            <ChatInput
                newMessageText={newMessageText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}/>
        </div>
    )
}

export default Chat