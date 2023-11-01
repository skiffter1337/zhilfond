import React from 'react';
import {Typography} from "../ui/typography/typography";
import s from './header.module.scss'

export const Header = () => {
    return (
        <div className={s.header}>
            <Typography variant={'h2'}>Жилфонд</Typography>
            <Typography variant={'body2'}>Пользователь</Typography>
        </div>
    );
};
