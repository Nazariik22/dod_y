import React from "react"
import style from './CreateAncets.module.css'
const CreateAncets = (props) => {
    return (
        <>
            <h2 className={style.h2}>Створення анкети</h2>
            <hr />
            <div className="flex">
                <section className={style.section_input}>
                    <div>
                        <p >Завантажити зображення</p>
                        <input type="file" accept="image/*"
                            onChange={(e) => props.hendlerInput(e.target.files[0], 'img')}
                        />
                    </div>
                    <div><p >Кличка</p>
                        <input
                            onChange={(e) => props.hendlerInput(e.target.value, 'alias')}
                            type="text" value={props.ancet.alias} />
                    </div>
                    <div><p >Порода</p>
                        <input
                            onChange={(e) => props.hendlerInput(e.target.value, 'breed')}
                            type="text" value={props.ancet.breed} />
                    </div>
                    <div><p >Вік</p>
                        <input
                            onChange={(e) => props.hendlerInput(e.target.value, 'age')}
                            type="text" value={props.ancet.age} />
                    </div>
                    <div><p >Алергія</p>
                        <input
                            onChange={(e) => props.hendlerInput(e.target.value, 'allergy')}
                            type="text" value={props.ancet.allergy} />
                    </div>
                    <div><p >Вакцинація</p>
                        <input
                            onChange={(e) => props.hendlerInput(e.target.value, 'vaccinations')}
                            type="text" value={props.ancet.vaccinations} />
                    </div>
                    <div><p >Стать</p>
                        <input
                            onChange={(e) => props.hendlerInput(e.target.value, 'c')}
                            type="text" value={props.ancet.c} />
                    </div>
                    <div><p >Місто</p>
                        <input
                            onChange={(e) => props.hendlerInput(e.target.value, 'city')}
                            type="text" value={props.ancet.city} />
                    </div>
                    <div>
                        <textarea
                            onChange={(e) => props.hendlerInput(e.target.value, 'description')}
                            placeholder="Додатково" value={props.ancet.description} ></textarea>
                    </div>
                </section>
                <section className={style.section_img}>
                    {props.ancet.img && <img src={props.ancet.img} alt="" />}
                </section>
            </div>

            <button
                onClick={() => props.url === 'add' && props.addAncet()}
            >
                {props.url === 'add' ? 'Створити' : 'Оновити'}
            </button>
        </>
    )
}
export { CreateAncets }

