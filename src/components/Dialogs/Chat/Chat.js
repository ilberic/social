import React from "react"
import "./Chat.sass"
import ChatInput from "./ChatInput/ChatInput";
import Messages from "./Messages/Messages";

const Chat = ({name, messagesData} ) => {
    return (
        <div className="chat">
            <span className="chat__title">{name}</span>
            <Messages messagesData={messagesData}/>
            <ChatInput/>
        </div>
    )
}

export default Chat