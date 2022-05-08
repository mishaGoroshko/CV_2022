import React from 'react';
import s from './Skill.module.css'

type SkillType = {
    title: string
    desc: string
}

export const Skill:React.FC<SkillType> = ({title,desc}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.desc}>{desc}</span>
        </div>
    );
}