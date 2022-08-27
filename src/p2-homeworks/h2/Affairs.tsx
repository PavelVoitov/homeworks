import React from 'react'
import Affair from './Affair'
import {DefaultAffairsType, FilterType} from './HW2'
import classNames from './Affairs.module.css'

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
                <button onClick={() => setAll('all')}>All</button>
                <button onClick={() => setHigh('high')}>High</button>
                <button onClick={() => setMiddle('middle')}>Middle</button>
                <button onClick={() => setLow('low')}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
