import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react';
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    value: string
    options?: string[]
    onChangeOption: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions = options ? options.map((el, index) => (<option key={index}>{el}</option>)) : []; // map options with key



    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange,
        onChangeOption(e.currentTarget.value);
    }

    return (
        <select
            onChange={onChangeCallback}
            {...restProps}
            className={s.superSelect}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
