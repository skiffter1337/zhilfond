import React, {ChangeEvent, FC} from 'react';
import s from './textFiled.module.scss'

type TextFiledPropsType = {
    placeholder?: string
    callBack: (value: string) => void
    text: string
}

export const TextFiled: FC<TextFiledPropsType> = ({placeholder, callBack, text}) => {

    return (
        <div>
            <input value={text} placeholder={placeholder} className={s.input} onChange={(e: ChangeEvent<HTMLInputElement>) =>  callBack(e.currentTarget.value)}/>
        </div>
    );
};

