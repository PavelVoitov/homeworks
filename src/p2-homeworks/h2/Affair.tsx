import React, {MouseEventHandler} from 'react'
import {AffairType, DefaultAffairsType} from "./HW2";
import classNames from './Affairs.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const onClickHandler = (_id: number) => {
        console.log(_id);
        props.deleteAffairCallback(_id);
    }

    return (
        <div className={classNames.taskClass}>
                     <div>{props.affair.name}</div>
                     <div>[{props.affair.priority}]</div>
                     <button onClick={() => onClickHandler(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
