import React from "react";
import style from './Header.module.css'
import img from './../../../img/search.png'
const Header = (props) => {
    return (
        <header className={style.main}>
            <h2>Ці лапки шукають дім:</h2>
            <div className="flex">
                <input type="text"
                    value={props.inputValue}
                    onChange={(e) => props.setInputValue(e.target.value)}
                />
                <img src={img} alt="" onClick={() => props.searchButton()} />
                <select onChange={(e) => props.hendlerFilter(e.target.value)}>
                    {props.state.map(item =>
                        <option key={item.value}
                            value={item.value}
                        >
                            {item.text}
                        </option>)}
                </select>
            </div>
        </header>
    )
}
export { Header }