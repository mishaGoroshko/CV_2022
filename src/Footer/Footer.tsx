import React from 'react';
import s from './Footer.module.css'
import sContainer from '../common/styles/Conteiner.module.css'


export const Footer = () => {
    return (
        <footer className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Michail Goroshko</h2>
                <div className={s.iconsBlock}>
                    <div className={s.icon}/>
                    <div className={s.icon}/>
                    <div className={s.icon}/>
                    <div className={s.icon}/>
                </div>
                <div className={s.info}>2022</div>
            </div>
        </footer>
    );
}