import React, { useState, useEffect } from "react";  
import style from './Autorization.module.css';  
import { useDispatch, useSelector } from "react-redux";  
import { autoAC, redirectUserAC } from "../../../Redux/personReduser";  
import { useNavigate } from 'react-router-dom';  
import imglogin from './../../../img/login.png'
import imgPassword from './../../../img/password.webp'
const Autorization = () => {  
    const [login, setLogin] = useState('');  
    const [password, setPassword] = useState('');  
    const [yes, setYes] = useState(false);  
    const dispatch = useDispatch();  
    const users = useSelector(state => state.users);  
    const navigate = useNavigate();  
    const hendlerAuto = () => {  
        const user = users.filter(item => item.login === login && item.password === password)[0];  
        if (user) {  
            user && dispatch(autoAC(user));   
            navigate('/person');  
        }  else{
            alert('Користувача не знайдено!'); 
        }
    };  
    return (  
        <div className="fl_c">  
            <div className='flex'>  
                <img src={imglogin} alt="логотип" className={style.img} />  
                <input type="text" placeholder="Логін"  
                    className={style.input}  
                    value={login}  
                    onChange={(e) => setLogin(e.target.value)}  
                />  
            </div>  
            <div className='flex'>  
                <img src={imgPassword} alt="логотип" className={style.img}/>  
                <input type="password"  
                    className={style.input}  
                    value={password}  
                    onChange={(e) => setPassword(e.target.value)}  
                    placeholder="Пароль" />  
            </div>  
            <div className='flex'>  
                <input type='checkbox'   
                    checked={yes}   
                    onChange={(e) => setYes(e.target.checked)}   
                />  
                <p>Запом'ятати мене</p>  
            </div>  
            <button  
                className='button'  
                onClick={hendlerAuto}  
            >Увійти</button>  
        </div>  
    );  
}  

export { Autorization };