import React from 'react';
import sContainer from '../common/styles/Conteiner.module.css'
import s from './Contacts.module.css'
import {Title} from '../common/components/title/Title';

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title title1={'Contact Me'}
                       title2={'I Will Be Glad To Hear From You'}/>
                <form className={s.formBlock}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <button type={'submit'}>Send</button>
            </div>
        </div>
    );
}