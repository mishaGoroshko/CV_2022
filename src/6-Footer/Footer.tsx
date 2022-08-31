import React from 'react';
import s from './Footer.module.scss'
import {Title} from '../common/components/title/Title';
import telegram from '../assets/icons/telegram.png';
import viber from '../assets/icons/viber.png';
import codeWars from '../assets/icons/codewars.svg';
import github from '../assets/icons/github.png';


export const Footer = () => {
    return (
        <footer className={s.contactsBlock}>
            <article className={s.contactsContainer}>
                <Title title1={'Developed'}
                       title2={'by Misha Goroshko'}/>
                <figure className={s.iconsBlock}>
                    <a href='https://t.me/MixaGP' target="_blank">
                        <img src={telegram} className={s.icon}
                             alt='telegram'/></a>
                    <a href="viber://chat?number=%2B375299077908" target="_blank">
                        <img src={viber}
                             className={s.icon}
                             alt='viber'/></a>
                    <a href='https://www.codewars.com/users/MihaGoroshko' target="_blank">
                        <img
                            src={codeWars} className={s.icon} alt='codeWars'/></a>
                    <a href='https://github.com/mihaGP800' target="_blank">
                        <img src={github}
                             className={`${s.icon} ${s.github}`}
                             alt='github'/></a>
                </figure>
                <div className={s.info}>© 2022</div>
            </article>
        </footer>
    );
}