import React from "react"
import "./ChatInput.sass"

const ChatInput = () => {
    let newMessageItem = React.createRef();
    let sendMessage = () => {
        let text = newMessageItem.current.value;
        alert(text);
    }
    return (
        <div  className="chat__input">
            <textarea ref={newMessageItem} name="" id="" cols="50" rows="5" placeholder="Ваше сообщение"></textarea>
            <button onClick={sendMessage}><img src="data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m4.7%2015.8c-.7%201.9-1.1%203.2-1.3%203.9-.6%202.4-1%202.9%201.1%201.8s12-6.7%2014.3-7.9c2.9-1.6%202.9-1.5-.2-3.2-2.3-1.4-12.2-6.8-14-7.9s-1.7-.6-1.2%201.8c.2.8.6%202.1%201.3%203.9.5%201.3%201.6%202.3%203%202.5l5.8%201.1c.1%200%20.1.1.1.1s0%20.1-.1.1l-5.8%201.1c-1.3.4-2.5%201.3-3%202.7z%22%20fill%3D%22%23828a99%22%2F%3E%3C%2Fsvg%3E" alt=""/></button>
        </div>
    )
}

export default ChatInput