import React from 'react'
import {AffairType} from "./HW2";
import classNames from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


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
                     <SuperButton red onClick={() => onClickHandler(props.affair._id)}>X</SuperButton>
        </div>
    )
}

export default Affair
