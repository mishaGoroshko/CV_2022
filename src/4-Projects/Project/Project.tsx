import React from 'react';
import s from './Project.module.scss'

type ProjectType = {
    title: string
    desc: string
    style: { backgroundImage: string }
    url: string
}

export const Project: React.FC<ProjectType> = ({title, desc, style, url}) => {
    return (
        <section className={s.project}>
            <div className={s.imageBlock}>
                <div className={s.image} style={style}>
                    <button className={s.button} type="button"
                            onClick={() => window.open(url, '_blank')}>view
                    </button>
                </div>
            </div>
            <aside className={s.textBlock}>
                <h3 className={s.title}>{title}</h3>
                <pre className={s.desc}>{desc}</pre>
            </aside>
        </section>
    );
}