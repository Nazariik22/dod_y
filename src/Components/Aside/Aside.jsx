import React from "react";
import { AsideUser } from "./AsideUser/AsideUser";
import { Info } from "./Info/Info";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import style from './Aside.module.css'
const Aside = () => {

    return (
        <div className={style.wrapper}>
            <aside className={style.aside}>
                <AsideUser />
                <Info />
                <Footer />
            </aside>
            <main >
                <Outlet />
            </main>
        </div>
    )
}
export { Aside }