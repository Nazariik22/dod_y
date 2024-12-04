import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from './Autorization.module.css'
import { useDispatch, useSelector } from "react-redux";
import { autoAC } from "../../../Redux/personReduser";
const Autorization = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [yes, setYes] = useState(false);
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    console.log(users)
    const hendlerAuto = () => {
        try {
            const user = users.filter(item => item.login === login && item.password === password)[0]
            user && dispatch(autoAC(user));
            console.log(user);
        } catch (error) {
            alert('Користувача не знайдено!');
        }   
    }
    return (
        <div className="fl_c">
            <div className='flex'>
                <img src="" alt="" />
                <input type="text" placeholder="Логін"
                    className={style.input}
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </div>
            <div className='flex'>
                <img src="" alt="" />
                <input type="password"
                    className={style.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль" />
            </div>
            <div className='flex'>
                <input type='checkbox' value={yes}
                    checked={yes ? 'checked' : ''}
                    onChange={(e) => setYes(e.target.value)}
                />
                <p>Запом'ятати мене</p>
            </div>
            <NavLink className='button' 
            //to='/'
                onClick={() => hendlerAuto()}
            >Увійти</NavLink>
        </div>
    );
}

export { Autorization };