import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/Conteiner.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <h3>Hello, I'm</h3>
                    <h1>Misha Haroshko</h1>
                    <p>A <span className={s.greenText}>Frontend Developer</span> From <span
                        className={s.yellowText}>Minsk&Tashkent</span>
                    </p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
}