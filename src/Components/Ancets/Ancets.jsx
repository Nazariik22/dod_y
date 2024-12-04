import React from "react";
import { useSelector } from "react-redux";
import { Ancet } from "./Ancet/Ancet";
import { Header } from "./Header/Header";
import style from './Ancets.module.css'

const Ancets = () => {
    const state = useSelector(state => state.ancets);
    return (
        <div className={`${style.main} fl_c`}>
            <Header />
            <section className={style.section}>
                {state.map(item =>
                    <Ancet
                        img={item.img}
                        alias={item.alias}
                        idUser={item.idUser}
                        id={item.id}
                    />
                )}
            </section>
        </div>
    )
}
export { Ancets }