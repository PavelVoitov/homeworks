import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: any // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''// need to fix with (?:)


    return (
        <div>
                <SuperInputText
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={onKeyPressHandler}
                    className={inputClass}
                />
                <span className={s.errorClass}>{error}</span>

                <SuperButton onClick={addUser} className={s.inputClass} >
                    add
                </SuperButton>
                <div className={s.countUsers}>Count Of Users: {totalUsers}</div>

        </div>
    )
}

export default Greeting
