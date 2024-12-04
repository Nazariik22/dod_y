import React from "react";
import { NavLink } from "react-router-dom";
import style from './Ancet.module.css'

const Ancet = (props) => {

    return (
        <div className={style.blok}>
            <img src={props.img} alt="" />
            <div className="flex">
                <h3>{props.alias}</h3>
                <NavLink to={`/ancet/${props.idUser}/${props.id}`}>Перейти</NavLink>
            </div>
        </div>
    )
}
export { Ancet }