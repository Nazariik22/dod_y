import React from "react";
import img from './../../../img/logo.png'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import style from './AsideUser.module.css'
const AsideUser = () => {
    const userName = useSelector(state => state.person.name)
    return (
        <div className="flex">
            <img src={img} alt=""  className={style.img}/>
            <NavLink to='/person'>{userName}</NavLink>
        </div>
    )
}
export { AsideUser }