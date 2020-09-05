import React from "react"
import "./Message.sass"

const Message = ({label, img, sendBy}) => {
    let messageClass = "";
    if (sendBy === "Вадим Беляев")  {
        messageClass = "my__message";
    } else {
        console.log(sendBy);
    }
    return (
        <div className={`message ${messageClass}`}>
            <img src={img} alt=""/>
            <span>{label}</span>
        </div>
    )
}

export default Message
