import React, {FC} from 'react';
import {Typography} from "../../ui/typography/typography";
import avatar from '../../../images/img/avatarBig.png'
import {EmployeeType} from "../employeesSlice";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {selectEmployees} from "../employees.selector";
import s from './employeeCard.module.scss'

type EmployeeCardPropsType = {
    selectedEmployee: number | null
}
export const EmployeeCard: FC<EmployeeCardPropsType> = ({selectedEmployee}) => {

    const employees: EmployeeType[] = useAppSelector(selectEmployees)

    const employee = employees.filter(el => el.id === selectedEmployee).map(el => {

        return (
            <div className={s.employee} key={el.id}>
                <img src={avatar} alt={'avatar'} className={s.avatar}/>
                <div className={s.info}>

                    <div className={s.personal}>
                        <Typography variant={'subtitle2'}>{el.name}</Typography>
                        <div className={s.row}>
                            <Typography variant={'subtitle1'}>email:</Typography>
                            <Typography variant={'body1'}>{el.name}</Typography>
                        </div>
                        <div className={s.row}>
                            <Typography variant={'subtitle1'}>phone:</Typography>
                            <Typography variant={'body1'}>{el.phone}</Typography>
                        </div>
                    </div>

                    <div className={s.about}>
                        <Typography variant={'subtitle1'}>О себе:</Typography>
                        <Typography variant={'body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={s.employeeCard}>
            {selectedEmployee ? employee : <Typography variant={'body1'} className={s.noEmployee}>Выберите сотрудника, чтобы посмотреть его профиль</Typography>}
        </div>
    );
};
