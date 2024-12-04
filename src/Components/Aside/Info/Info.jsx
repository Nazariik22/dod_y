import React from "react";
import { NavLink } from "react-router-dom";
import style from './Info.module.css'
const Info = () => {
    const state = [
        {id:"1",text: "Анкети", link: "/ancets" },
        {id:"2",text: "Створити", link: "/create/add" },
        {id:"3",text: "Чат", link: "/chat" },
        {id:"3",text: "Вийти", link: "/auto/login" },
    ]
    return (
        <div className={style.container}>
            {state.map(item =>
                <NavLink to={item.link} key={item.id}>
                    {item.text}</NavLink>)
            }
        </div>
    )
}
export { Info }