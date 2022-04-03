import React from 'react';
import sContainer from '../common/styles/Conteiner.module.css'
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>My contacts</h2>
                <form className={s.formBlock}>
                    <input />
                    <input />
                    <textarea />
                </form>
                <button>Send</button>
            </div>
        </div>
    );
}