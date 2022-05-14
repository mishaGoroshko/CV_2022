import React from 'react';
import s from './Skills.module.css'
import sContainer from '../common/styles/Conteiner.module.css';
import {Skill} from './Skill/Skill';
import {Title} from '../common/components/title/Title';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title title1={'Develop is Life'}
                title2={'I Develop Skills Regularly to Keep Me Update'}/>
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