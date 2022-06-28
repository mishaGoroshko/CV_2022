import React from 'react';
import {Link} from 'react-scroll';
import s from './Nav.module.scss'

export const Nav = () => {

    return (
        <div className={s.nav}>
            <Link
                className={s.link}
                activeClass={s.active}
                to="main"
                spy={true}
                smooth={true}
                offset={-59}
                duration={500}
            >main</Link>
            <Link
                className={s.link}
                activeClass={s.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={-59}
                duration={500}
            >skills</Link>
            <Link
                className={s.link}
                activeClass={s.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={-59}
                duration={500}
            >projects</Link>
            <Link
                className={s.link}
                activeClass={s.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={-59}
                duration={500}
            >contacts</Link>

        </div>
    );
}