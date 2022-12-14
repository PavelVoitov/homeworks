import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from "../../../h4/common/c3-SuperCheckbox/SuperCheckbox.module.css";
import c from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        name,
        options, value,
        onChangeOption,

    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange(e);
        onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label
            key={name + '-' + i}
            className={c.label}
        >
            <input
                type={'radio'}
                name={name}
                checked={value === o}
                value={o}
                onChange={onChangeCallback}
                className={s.checkbox}
            />
            <span className={c.span}> - {o}</span>

        </label>
    )) : []

    return (
        <div className={c.radio}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
