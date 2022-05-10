import React from 'react';
import {Navigate, NavLink} from 'react-router-dom';
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink to='/main'>main</NavLink>
            <NavLink to='/skills'>skills</NavLink>
            {/*<Navigate to={}/>*/}
            <a href="">projects</a>
            <a href="">contacts</a>
        </div>
    );
}