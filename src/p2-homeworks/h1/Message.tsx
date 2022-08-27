import React from 'react'
import classNames from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string

}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={classNames.HW1}>
            <div className={classNames.message}>
                <div>
                    <div><img className={classNames.avatar} src={props.avatar} alt=""/></div>
                </div>

                    <div className={classNames.messageImg}>
                        <div>
                            <div className={classNames.corner}></div>
                            <div className={classNames.name}>{props.name}</div>
                            <div className={classNames.textMessage}>{props.message}</div>
                        </div>
                        <div className={classNames.parent_of_time}>
                            <div className={classNames.time}>{props.time}</div>
                        </div>
                    </div>
            </div>
        </div>

)
}


