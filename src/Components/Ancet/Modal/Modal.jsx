import React from "react";
import style from './Modal.module.css'

const Modal = (props) => {
    return (
        <div className={style.container}>
            <div className={style.modal}>
                <span onClick={()=>props.close(false)}>X</span>
                <p>Для зв'язку з автором анкети зверніться за номером:
                    {props.tel}</p>
            </div>
        </div>)
}
export { Modal }