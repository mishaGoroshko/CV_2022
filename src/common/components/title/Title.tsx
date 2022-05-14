import React from 'react';
import s from './Title.module.css';

type TitleType = {
    title1: string
    title2: string
}

export const Title: React.FC<TitleType> = ({title1, title2}) => {
    return (
        <div className={s.title}>
            <h3>{title1}</h3>
            <h2>{title2}</h2>
        </div>
    );
}