import React from 'react';
import s from './Title.module.css';

type TitleType = {
    text: string
}

export const Title: React.FC<TitleType> = ({text}) => {
    return (
        <div className={s.title}>
            <h2>{text}</h2>
        </div>
    );
}