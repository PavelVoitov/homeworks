import React, {MouseEvent, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import c from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        setTimeout(() => { clearInterval(timerId)}, 1);
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = (e:MouseEvent<HTMLDivElement>) => {
        setShow(true)
    }
    const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
        setShow(false)
    }


    const stringTime = date.toLocaleTimeString('en-GB');
    const stringDate = date.toLocaleDateString('en-GB')

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={c.time}
            >
                {stringTime}
            </div>
            <div className={c.date}>
                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>


            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
