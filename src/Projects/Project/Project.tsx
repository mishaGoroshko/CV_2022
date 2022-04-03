import React from 'react';
import s from './Project.module.css'

type ProjectType = {
    title: string
    desc: string
}

export const Project:React.FC<ProjectType> = ({title,desc}) => {
    return (
        <div className={s.project}>
            <div className={s.image}>
                <button>view</button>
            </div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.desc}>{desc}</span>
        </div>
    );
}