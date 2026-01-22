import React from 'react'
import s from './FriendMessage.module.css'
import logo from '../avatar.png'

type FriendMessageType = {
    message: {
        id: number
        user: {
            avatar: string
            name: string
        }
        message: {
            text: string
            time: string
        }
    }
}


// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: any) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src={logo}

                    // создаёт студент
                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        Ivan
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        Hello, how are you, what did you do yesterday?
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                9:01
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
