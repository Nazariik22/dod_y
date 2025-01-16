import React from "react";
import style from './Auto.module.css'
import { NavLink, Outlet, useHref } from "react-router-dom";
const Auto = () => {
    const url = useHref();
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.header}>
                    <NavLink to='/'>|||</NavLink>
                    <NavLink to='login'
                        className={url !== '/auto/register' && style.active}
                    >Вхід</NavLink>
                    <NavLink to='register'
                        className={url === '/auto/register' && style.active}
                    >Реєстрація</NavLink>
                </div>
                <Outlet />
            </div>

        </div>
    );
}

export { Auto };
