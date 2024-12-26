import React, { useEffect, useState } from "react";
import style from './Ancet.module.css';
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { Modal } from './Modal/Modal';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Ancet = () => {
    const { idUser, id } = useParams();
    const [ancet, setAncet] = useState(null);
    const [user, setUser] = useState(null);
    const [modal, setModal] = useState(false);
    const myId = useSelector(state => state.person._id);
    const navigate = useNavigate();

    const fetchAncet = async () => {
        try {
            const response = await axios.get(`https://glacial-island-86858-012f45b91779.herokuapp.com/ancet/${id}`);
            setAncet(response.data.ancet);
        } catch (error) {
            console.error('Помилка отримання анкети:', error.response?.data || error.message);
        }
    };

    const fetchUser = async () => {
        try {
            const response = await axios.get(`https://glacial-island-86858-012f45b91779.herokuapp.com/user/${idUser}`);
            setUser(response.data.user);
        } catch (error) {
            console.error('Помилка отримання користувача:', error.response?.data || error.message);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`https://glacial-island-86858-012f45b91779.herokuapp.com/ancet/${id}`);
            console.log('Анкету успішно видалено:', response.data.message);
            navigate('/ancets'); 
        } catch (error) {
            console.error('Помилка видалення анкети:', error.response?.data || error.message);
        }
    };

    useEffect(() => {
        fetchAncet();
        fetchUser();
    }, [id, idUser]);

    if (!ancet || !user) {
        return <p>Завантаження...</p>;
    }

    return (
        <div className={style.main}>
            {modal && <Modal close={setModal} tel={user.tel} />}
            <NavLink to='/ancets' className='button'>Повернутися назад</NavLink>
            <section>
                <img src={ancet.img} alt="" />
                <div>
                    <h3>Вітаю, мене звати {ancet.alias}</h3>
                    <p>Вік: {ancet.age}</p>
                    <p>Стать: {ancet.c}</p>
                    <p>Місто перебування: {ancet.city}</p>
                    <p>Алергія: {ancet.allergy}</p>
                    <p>Вакцинації: {ancet.vaccinations}</p>
                    <p>Порода: {ancet.breed}</p>
                </div>
            </section>
            <p className={style.description}>Додаткова інформація: {ancet.description}</p>
            <div className={`flex ${style.button}`}>
                {user._id === myId ?
                    <>
                        {/*<button>Оновити</button>*/}
                        <button onClick={handleDelete}>Видалити</button>
                    </>
                    :
                    <button onClick={() => setModal(true)}>Зв'язатися</button>
                }
            </div>
        </div>
    );
};

export { Ancet };

