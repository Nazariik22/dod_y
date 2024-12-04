import React, { useState } from 'react';
import img from './../../img/1.webp'
import style from './Profile.module.css'
const Profile = (props) => {
    const [info, setInfo] = useState(false);
    
    return (
        <>
            <img src={img} alt="-__-" className={style.img} />
            <h3 className={style.h}>{props.user.lastname} {props.user.name}</h3>
            <section className={style.section}>
                {!info ?
                    <>
                        <p>{props.user.login}</p>
                        <p>{props.user.password}</p>
                        <p>{props.user.tel}</p>
                        <p>{props.user.city}</p>
                    </>
                    :
                    <>
                        <p>Прізвище</p>
                        <input className={style.input}
                            onChange={(e) => props.hendlerInput(e.target.value, 'lastname')}
                            value={props.user.lastname} type="text" placeholder="Прізвище" />
                        <p>Ім'я</p>
                        <input className={style.input}
                            onChange={(e) => props.hendlerInput(e.target.value, 'name')}
                            value={props.user.name} type="text" placeholder="Ім'я" />
                        <p>Логін</p>
                        <input className={style.input}
                            onChange={(e) => props.hendlerInput(e.target.value, 'login')}
                            value={props.user.login} type="text" placeholder="Логін" />
                        <p>Пароль</p>
                        <input className={style.input}
                            onChange={(e) => props.hendlerInput(e.target.value, 'password')}
                            value={props.user.password} type="text" placeholder="Пароль" />
                        <p>Місто проживання</p>
                        <input className={style.input}
                            onChange={(e) => props.hendlerInput(e.target.value, 'city')}
                            value={props.user.city} type="text" placeholder="Місто проживання" />
                        <p>Телефон</p>
                        <input className={style.input}
                            onChange={(e) => props.hendlerInput(e.target.value, 'tel')}
                            value={props.user.tel} type="text" placeholder="Телефон" />
                    </>
                }
            </section>
            <button className={style.button}
                onClick={() => {
                    setInfo(info ? false : true)
                    info && props.updateUser();
                }}>
                {info ? 'Зберегти' : "Редагувати"}
            </button>
        </>
    )
}

export { Profile }