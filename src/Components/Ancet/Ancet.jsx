import React, { useState } from "react";
import style from './Ancet.module.css'
import { NavLink } from "react-router-dom";
import { Modal } from './Modal/Modal'
import { useSelector } from "react-redux";
const Ancet = (props) => {
    const [modal, setModal] = useState(false);
    const user = useSelector(state=>state.users).filter(item=>item.id ===props?.state?.idUser)[0]
   
    return (
        <div className={style.main}>
            {modal && <Modal close={setModal} tel = {user.tel} />}
            <NavLink to='/ancets' className='button' > Повернутися назад</NavLink>
            <section>
                <img src={props.state?.img} alt="" />
                <div>
                    <h3>Вітаю, мене звати {props.state?.alias}</h3>
                    <p>Вік:{props.state?.age}</p>
                    <p>Стать:{props.state?.c}</p>
                    <p>Місто перебування:{props.state?.city} </p>
                    <p>Алергія:{props.state?.allergy}</p>
                    <p>Вакцинації:{props.state?.vaccinations}</p>
                    <p>Порода:{props.state?.breed}</p>
                </div>
            </section>
            <p className={style.description}>Додаткова інформація:{props.state?.description}</p>
            <div className={`flex ${style.button}`}>
                {props.person === props.state?.idUser ?

                    <>
                        <button>Оновити</button>
                        <button onClick={() => props.hendletDelete()}>Видалити</button>
                    </>
                    :
                    <button onClick={() => setModal(true)}>Зв'язатися</button>
                }

            </div>
        </div>
    )
}
export { Ancet }