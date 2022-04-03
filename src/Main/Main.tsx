import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/Conteiner.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hello</span>
                    <h1>I am Miha</h1>
                    <p>frontend developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
}