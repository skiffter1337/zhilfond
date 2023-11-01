import React, {FC} from 'react';
import avatar from '../../../../images/img/avatarSmall.png'
import s from './employeeCardPreview.module.scss'
import {Typography} from "../../../ui/typography/typography";
import {EmployeeType} from "../../employeesSlice";

type EmployeeCardPreviewPropsType = {
    employee: EmployeeType
    onClick: (id: number) => void
    selectedEmployee: number | null
}
export const EmployeeCardPreview: FC<EmployeeCardPreviewPropsType> = ({employee: {username, email, id}, onClick, selectedEmployee}) => {
    return (
        <div className={s.preview} onClick={() => onClick(id)}>
            <div className={s.avatarBlock}>
                <img src={avatar} alt={'avatar'} className={s.avatar}/>
            </div>
            <div className={`${s.info} ${selectedEmployee === id ? s.selected : ''}`}>
                <Typography variant={'subtitle1'}>{username}</Typography>
                <Typography variant={'body1'}>{email}</Typography>
            </div>
        </div>
    );
};
