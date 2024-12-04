import React, { useState } from "react";
import style from './Header.module.css'
import img from './../../../img/search.png'
const Header = (props) => {
    const state = [
        { value: "alias", text: "Кличка", selected: true },
        { value: "age", text: "Вік", selected: false },
        { value: "city", text: "Місто", selected: false },
    ]
    const [inputValue, setInputValue] = useState('');
    return (
        <header className={style.main}>
            <h2>Ці лапки шукають дім:</h2>
            <div className="flex">
                <input type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <img src={img} alt="" />
                <select >
                    {state.map(item =>
                        <option
                            value={item.value}
                            selected={item.selected ? "selected" : ""}
                            onClick={() => props.hendlerFilter(item.value)}
                        >
                            {item.text}
                        </option>)}
                </select>
            </div>
        </header>
    )
}
export { Header }