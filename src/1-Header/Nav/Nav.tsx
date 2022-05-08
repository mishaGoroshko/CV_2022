import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="">main</a>
            <a href="">skills</a>
            <a href="">projects</a>
            <a href="">contacts</a>
        </div>
    );
}