import React, {useState} from 'react';
import {SideBar} from "./sideBar/sideBar";
import {EmployeeCard} from "./employeeCard/employeeCard";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import s from './main.module.scss'

export const Main = () => {

    const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null)

    return (
        <>
            <div className={s.main}>
                <SideBar setSelectedEmployee={setSelectedEmployee} selectedEmployee={selectedEmployee}/>
                <EmployeeCard selectedEmployee={selectedEmployee}/>
            </div>
            <ToastContainer/>
        </>
    );
};
