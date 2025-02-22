import React, { useState } from "react";
import axios from "axios"; // Додайте axios
import style from './Autorization.module.css';
import { useDispatch } from "react-redux";
import { autoAC } from "../../../Redux/personReduser";
import { useNavigate } from 'react-router-dom';
import imglogin from './../../../img/login.png';
import imgPassword from './../../../img/password.webp';

const Autorization = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [yes, setYes] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hendlerAuto = async () => {
        try {
            const response = await axios.post('https://glacial-island-86858-012f45b91779.herokuapp.com/user/login', { login, password });
            const user = response.data;
            if (user) {
                dispatch(autoAC(user.user)); 
                navigate('/person');   
            } else {
                alert('Користувача не знайдено!');
            }
        } catch (error) {
            console.error('Error during authorization:', error);
            alert('Помилка авторизації. Перевірте логін і пароль.');
        }
    };

    return (
        <div className="fl_c">
            <div className='flex'>
                <img src={imglogin} alt="логотип" className={style.img} />
                <input
                    type="text"
                    placeholder="Логін"
                    className={style.input}
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </div>
            <div className='flex'>
                <img src={imgPassword} alt="логотип" className={style.img} />
                <input
                    type="password"
                    className={style.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Пароль"
                />
            </div>
            <div className='flex'>
                <input
                    type='checkbox'
                    checked={yes}
                    onChange={(e) => setYes(e.target.checked)}
                />
                <p>Запам'ятати мене</p>
            </div>
            <button
                className='button'
                onClick={hendlerAuto}
            >Увійти</button>
        </div>
    );
};

export { Autorization };
