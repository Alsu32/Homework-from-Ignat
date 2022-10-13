import React from 'react'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className="message">
            <div>avatar={props.avatar}</div>
            <div>name={props.name}</div>
            <div>message={props.message}</div>
            <div>time={props.time}</div>
        </div>
    )
}

export default Message
