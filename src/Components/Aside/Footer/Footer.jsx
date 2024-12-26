import React from "react";
import { Link } from "react-router-dom";
import style from './Footer.module.css'
const Footer = ()=>{

    return (
        <div className={style.footer}>
            <div className="fl_c">
                {/*<p>Контакти</p>*/}
                <img src="#" alt="" />
            </div>
            <div className="fl_c">
                <p>Створено:</p>
                <Link target="_blank" to="#">Адамович Ю.</Link>
            </div>
            
        </div>
    )
}
export {Footer}