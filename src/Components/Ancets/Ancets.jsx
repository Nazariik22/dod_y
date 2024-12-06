import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Ancet } from "./Ancet/Ancet";
import { Header } from "./Header/Header";
import style from './Ancets.module.css'

const Ancets = () => {
    const stateDefault = useSelector(state => state.ancets);
    const data = [
        { value: "alias", text: "Кличка", selected: true },
        { value: "age", text: "Вік", selected: false },
        { value: "city", text: "Місто", selected: false },
    ]
    const [inputValue, setInputValue] = useState('');
    const [filterValue, setFilterValue] = useState('alias');
    const [state, setState] = useState(stateDefault);
    const searchButton = () => {
        setState(stateDefault.filter(item =>
            item[filterValue].toLowerCase().includes(inputValue.toLowerCase()) && item
        ))
    }
    const hendlerFilter = (value) => {
        setFilterValue(value);
        setInputValue('');
        setState(stateDefault);

    }
    return (
        <div className={`${style.main} fl_c`}>
            <Header
                inputValue={inputValue}
                setInputValue={setInputValue}
                state={data}
                searchButton={searchButton}
                hendlerFilter={hendlerFilter}
            />
            <section className={style.section}>
                {state.map(item =>
                    <div key={`${item.idUser}&${item.id}`}>
                        <Ancet
                            img={item.img}
                            alias={item.alias}
                            idUser={item.idUser}
                            id={item.id}

                        />
                    </div>

                )}
            </section>
        </div>
    )
}
export { Ancets }