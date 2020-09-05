import React from "react"
import "./Messages.sass"
import Message from "./Messege/Message";

const Messages = ({messagesData}) => {
    let newMessagesData =
        messagesData.map(message => <Message id={message.id} sendBy={message.sendBy} img={message.img} label={message.label}/>)
    return (
        <div className="messages">
            {newMessagesData}
        </div>
    )
}

export default Messages