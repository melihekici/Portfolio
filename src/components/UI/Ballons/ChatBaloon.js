import React, { useState, useRef } from 'react';

import styles from './ChatBaloon.module.css';

function ChatBaloon(props) {
    const [chatVisible, setChatVisible] = useState(false);
    const [sentMessages, setSentMessages] = useState([]);
    const messageBox = useRef();

    function openChatBaloon() {
        setChatVisible((prevState) => {
            setChatVisible(!prevState);
        });
    };

    function sendMessageHandler() {
        const message = messageBox.current.value;
        if(message.trim().length > 0) {
            setSentMessages((preState) => {
                const newMessages = [...preState, message];
                return newMessages;
            });
            messageBox.current.value = "";
        }
    };

    return (
        <React.Fragment>
            <img onClick={openChatBaloon} className={`${styles['chat-baloon']} ${chatVisible && styles.invisible}`} alt="Chat-Baloon" src="https://media-exp1.licdn.com/dms/image/C4E03AQGji9lWkNw1yg/profile-displayphoto-shrink_800_800/0/1600437083110?e=1625702400&v=beta&t=xG7SRFFPzw8q7kGLRSI6KVU9S4i4U0LZxIaM0h0nS78"></img>
            <div className={`${styles['chat']} ${!chatVisible && styles.invisible}`}>
                <button onClick={openChatBaloon} className={styles['close-button']}>X</button>
                <button onClick={sendMessageHandler} className={styles['send-message']}>Send</button>
                <textarea ref={messageBox} wrap="soft" className={styles.message} type="text"></textarea>
                <div className={styles.messages}>
                <p>Sending message through here is not active yet. Messages will not reach to me.</p>
                <hr/>
                {sentMessages.map((message) => {
                    return (
                        <div key={Math.random()}>
                            <p key={Math.random()}>You: {message}</p>
                            <hr/>
                        </div>
                    );
                })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default ChatBaloon;