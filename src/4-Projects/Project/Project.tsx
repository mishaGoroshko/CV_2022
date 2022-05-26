import React from 'react';
import s from './Project.module.scss'

type ProjectType = {
    title: string
    desc: string
    style: { color: string, backgroundImage: string }
}

export const Project:React.FC<ProjectType> = ({title,desc, style}) => {
    return (
        <div className={s.project}>
            <div className={s.image} style={style}>
                <button className={s.button}>view</button>
            </div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.desc}>{desc}</span>
        </div>
    );
}