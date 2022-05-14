import React from 'react';
import s from './Footer.module.css'
import sContainer from '../common/styles/Conteiner.module.css'
import {Title} from '../common/components/title/Title';


export const Footer = () => {
    return (
        <footer className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title title1={'Developed with love'}
                       title2={'by Misha Haroshko'}/>
                <div className={s.iconsBlock}>
                    <div className={s.icon}/>
                    <div className={s.icon}/>
                    <div className={s.icon}/>
                    <div className={s.icon}/>
                </div>
                <div className={s.info}>© 2022</div>
            </div>
        </footer>
    );
}