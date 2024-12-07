import React from 'react';
import style from './404.module.css'

const Error404 = () => {
    return (
        <div className={style.main}>
            <h1>Сторінки не існує</h1>
            <b>404</b>
        </div>
    )
};


export { Error404 }