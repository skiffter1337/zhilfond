import React, {FC, useEffect, useState} from 'react';
import {Typography} from "../../ui/typography/typography";
import {TextFiled} from "../../ui/textFiled/textFiled";
import {useActions} from "../../../hooks/useActions";
import {employeesThunks, EmployeeType} from "../employeesSlice";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {selectEmployees} from "../employees.selector";
import {EmployeeCardPreview} from "./employeeCardPreview/employeeCardPreview";
import {selectIsLoading} from "../../../app/app.selector";
import {CircularProgress} from "@mui/material";
import s from './sideBar.module.scss'

type SideBarPropsType = {
    setSelectedEmployee: (id: number | null) => void
    selectedEmployee: number | null
}
export const SideBar: FC<SideBarPropsType> = ({setSelectedEmployee, selectedEmployee}) => {

    const [text, setText] = useState('')
    const {getEmployees} = useActions(employeesThunks)
    const employees: EmployeeType[] = useAppSelector(selectEmployees)
    const isLoading = useAppSelector(selectIsLoading)

    useEffect(() => {
        const debounceSearch = (value: string) => {
            const queryParams = value.split(',').map((term) => {
                term = term.trim().charAt(0).toUpperCase() + term.trim().slice(1)
                if (/^\d+$/.test(term)) {
                    return `id=${term}`
                } else {
                    return `username=${term}`
                }
            })

            getEmployees(queryParams)
        }

        const debounceTimeout = setTimeout(() => {
            debounceSearch(text)
        }, 500)

        return () => clearTimeout(debounceTimeout)
    }, [text, getEmployees])

    const mappedEmployees = employees.map(employee => {
       return <EmployeeCardPreview key={employee.id}
                                   employee={employee}
                                   onClick={() => setSelectedEmployee(employee.id)}
                                   selectedEmployee={selectedEmployee}/>
    })

    const onInputHandler = (value: string) => {
        setSelectedEmployee(null)
        setText(value)
    }

    return (
        <div className={s.sideBar}>
            <div className={s.searchBlock}>
                <Typography variant={'subtitle1'}>Поиск сотрудников</Typography>
                <TextFiled text={text} placeholder={'Введите Id или имя '} callBack={(value) => onInputHandler(value)}/>
            </div>
            <Typography variant={'subtitle1'} className={s.result}>Результаты</Typography>
            <div className={s.resultsBlock}>
                {isLoading ?
                    <div className={s.loader}><CircularProgress/></div>
                    : employees.length > 0 ? mappedEmployees :
                        <Typography variant={'body1'} className={s.noData}>ничего не найдено</Typography>
                }
            </div>
        </div>
    );
};

