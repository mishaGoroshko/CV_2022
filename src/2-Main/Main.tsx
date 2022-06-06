import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/Conteiner.module.css'
import wolf from '../assets/image/nophotoshop29-800x532.png';

export const Main = () => {

    const wolfAva = {
        backgroundImage: `url(${wolf})`,
    };
    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <h3>Hello, I'm</h3>
                    <h2>Misha Haroshko</h2>
                    <p>A <span className={s.greenText}>Frontend Developer</span> From <span
                        className={s.yellowText}>Minsk&Tashkent</span>
                    </p>
                </div>
                <div style={wolfAva} className={s.photo}>

                </div>
            </div>
        </div>
    );
}