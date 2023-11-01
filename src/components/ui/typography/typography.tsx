import s from './typography.module.scss'
import {ComponentPropsWithoutRef, ElementType, ReactNode} from "react";

export type TypographyType =
    | 'h2'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'


type PropsType<T extends ElementType = 'p'> = {
    variant: TypographyType
    children: ReactNode
    className?: string
    as?: T
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
    props: PropsType<T> & Omit<ComponentPropsWithoutRef<T>, keyof PropsType<T>>
) => {
    const {variant = 'body1', className, as: Component = 'p', ...rest} = props

    return <Component className={`${s[variant]} ${className}`} {...rest} />
}