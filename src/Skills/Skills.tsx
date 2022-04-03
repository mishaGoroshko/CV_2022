import React from 'react';
import s from './Skills.module.css'
import sContainer from '../common/styles/Conteiner.module.css';
import {Skill} from './Skill/Skill';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    <Skill title='HTML' desc={'язык гипертекстовой разметки'}/>
                    <Skill title='CSS' desc={' язык иерархических правил (таблиц стилей (en-US)), используемый для представления внешнего вида документа'}/>
                    <Skill title='JS' desc={'язык сценариев веб-страниц'}/>
                    {/*<Skill title='React' desc={'библиотека для создания пользовательских интерфейсов'}/>*/}
                </div>
            </div>
        </div>
    );
}