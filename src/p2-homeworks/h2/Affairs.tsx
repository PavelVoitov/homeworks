import React from 'react'
import Affair from './Affair'
import {DefaultAffairsType, FilterType} from './HW2'
import classNames from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: DefaultAffairsType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}


function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (value: FilterType) => {
        props.setFilter(value);
    } // need to fix
    const setHigh = (value: FilterType) => {
        props.setFilter(value);
    }
    const setMiddle = (value: FilterType) => {
        props.setFilter(value);
    }
    const setLow = (value: FilterType) => {
        props.setFilter(value);
    }

    return (
        <div>
            {mappedAffairs}
            <div className={classNames.buttonSorted}>
                <SuperButton onClick={() => setAll('all')}>All</SuperButton>
                <SuperButton onClick={() => setHigh('high')}>High</SuperButton>
                <SuperButton onClick={() => setMiddle('middle')}>Middle</SuperButton>
                <SuperButton onClick={() => setLow('low')}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
