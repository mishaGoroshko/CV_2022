import React from 'react';
import {Link} from 'react-scroll';
import s from './Nav.module.scss'

export const Nav = () => {

    return (
        <nav className={s.nav}>
            <ul>
                <li><Link
                    className={s.link}
                    activeClass={s.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-59}
                    duration={500}
                >main</Link></li>
                <li><Link
                    className={s.link}
                    activeClass={s.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-59}
                    duration={500}
                >skills</Link></li>
                <li><Link
                    className={s.link}
                    activeClass={s.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-59}
                    duration={500}
                >projects</Link></li>
                <li><Link
                    className={s.link}
                    activeClass={s.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-59}
                    duration={500}
                >contacts</Link></li>
            </ul>
        </nav>
    );
}