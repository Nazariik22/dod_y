import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ancet } from "./Ancet/Ancet";
import { Header } from "./Header/Header";
import style from './Ancets.module.css';
import axios from 'axios';
import { createAncetsAC } from "../../Redux/AncetReduser";

const Ancets = () => {
    const dispatch = useDispatch();
    const stateDefault = useSelector(state => state.ancets);
    const [inputValue, setInputValue] = useState('');
    const [filterValue, setFilterValue] = useState('alias');
    const [filteredState, setFilteredState] = useState(stateDefault);

    const fetchAncets = async () => {
        try {
            const response = await axios.get('https://glacial-island-86858-012f45b91779.herokuapp.com/ancet');
            dispatch(createAncetsAC(response.data.ancets));
        } catch (error) {
            console.error();
        }
    };

    useEffect(() => {
        fetchAncets();
    }, []);

    useEffect(() => {
        setFilteredState(stateDefault);
    }, [stateDefault]);

    const searchButton = () => {
        setFilteredState(stateDefault.filter(item =>
            item[filterValue].toLowerCase().includes(inputValue.toLowerCase())
        ));
    };

    const hendlerFilter = (value) => {
        setFilterValue(value);
        setInputValue('');
        setFilteredState(stateDefault);
    };

    return (
        <div className={`${style.main} fl_c`}>
            <Header
                inputValue={inputValue}
                setInputValue={setInputValue}
                state={[
                    { value: "alias", text: "Кличка", selected: true },
                    { value: "age", text: "Вік", selected: false },
                    { value: "city", text: "Місто", selected: false },
                ]}
                searchButton={searchButton}
                hendlerFilter={hendlerFilter}
            />
            <section className={style.section}>
                {filteredState.map(item => (
                    <div key={`${item.idUser}&${item.id}`}>
                        <Ancet
                            img={item.img}
                            alias={item.alias}
                            idUser={item.idUser}
                            id={item._id}
                        />
                    </div>
                ))}
            </section>
        </div>
    );
};

export { Ancets };
