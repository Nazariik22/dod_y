import React, { useState } from "react";
import img from './../../../img/logo.png'
import { NavLink } from "react-router-dom";
import style from './../Autorization/Autorization.module.css'
import { useDispatch } from "react-redux";
import { createUsers } from "../../../Redux/userReduser";
const Register = () => {
    const [user, setUser] = useState({
        name: "",
        lastname: "",
        city: "",
        login: "",
        password: "",
        tel: ""
    })
    const dispatch = useDispatch();
    const hendlerInput = (data, action) => {
        switch (action) {
            case 'name':
                setUser({ ...user, name: data })
                break;
            case 'lastname':
                setUser({ ...user, lastname: data })
                break;
            case 'city':
                setUser({ ...user, city: data })
                break;
            case 'login':
                setUser({ ...user, login: data })
                break;
            case 'password':
                setUser({ ...user, password: data })
                break;
            case 'tel':
                setUser({ ...user, tel: data })
                break;
            default:
                break;
        }
    }
    const addUser = () => {
        if (user.city && user.lastname && user.name && user.login && user.password && user.tel) {
            dispatch(createUsers(user))
            setUser({
                name: "",
                lastname: "",
                city: "",
                login: "",
                password: "",
                tel: ""
            })
        }
    }
    return (
        <div>
            <div className="flex">
                <img src={img} alt="" />
                <h2 className={style.h2}>Добрі лапки</h2>
            </div>
            <h3>Реєстрація</h3>
            <div className={`fl_c ${style.colum}`}>
                <p>Прізвище</p>
                <input className={style.input}
                    onChange={(e) => hendlerInput(e.target.value, 'lastname')}
                    value={user.lastname} type="text" placeholder="Прізвище" />
                <p>Ім'я</p>
                <input className={style.input}
                    onChange={(e) => hendlerInput(e.target.value, 'name')}
                    value={user.name} type="text" placeholder="Ім'я" />
                <p>Логін</p>
                <input className={style.input}
                    onChange={(e) => hendlerInput(e.target.value, 'login')}
                    value={user.login} type="text" placeholder="Логін" />
                <p>Пароль</p>
                <input className={style.input}
                    onChange={(e) => hendlerInput(e.target.value, 'password')}
                    value={user.password} type="text" placeholder="Пароль" />
                <p>Місто проживання</p>
                <input className={style.input}
                    onChange={(e) => hendlerInput(e.target.value, 'city')}
                    value={user.city} type="text" placeholder="Місто проживання" />
                <p>Телефон</p>
                <input className={style.input}
                    onChange={(e) => hendlerInput(e.target.value, 'tel')}
                    value={user.tel} type="text" placeholder="Телефон" />
                <NavLink to='/auto/login' className='button' onClick={() => addUser()}>Вхід</NavLink>
            </div>
        </div>
    );
}

export { Register };