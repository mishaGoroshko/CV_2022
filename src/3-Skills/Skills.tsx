import React, {useEffect, useRef, useState} from 'react';
import s from './Skills.module.scss'
import {Title} from '../common/components/title/Title';

export const Skills = () => {
    const [isHardSkills, setIsHardSkills] = useState(false)
    const [isSoftSkills, setIsSoftSkills] = useState(false)
    const [isLanguages, setIsLanguages] = useState(false)

    const hardSkills = useRef<any>();
    const softSkills = useRef<any>();
    const languages = useRef<any>();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setIsHardSkills(entries[0].isIntersecting)
        });
        observer.observe(hardSkills.current);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setIsSoftSkills(entries[0].isIntersecting)
        });
        observer.observe(softSkills.current);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setIsLanguages(entries[0].isIntersecting)
        });
        observer.observe(languages.current);
    }, []);

    return (
        <article id='skills' className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Title title1={'development is life'}
                       title2={'I improve my skills regularly to be at my best'}/>

                <div className={s.container}>

                    <div className={s.col}>
                        <h2 className={`${s.softSkills} ${isSoftSkills && s.title}`}>soft
                            skills</h2>
                        <ul ref={softSkills} className={s.skill}>
                            <li><span
                                className={`${s.blueLine} ${isSoftSkills && s.communication}`}></span><em>communication</em>
                            </li>
                            <li><span
                                className={`${s.blueLine} ${isSoftSkills && s.problemSolving}`}></span><em>problem
                                solving</em>
                            </li>
                            <li><span
                                className={`${s.blueLine} ${isSoftSkills && s.workEthic}`}></span><em>work
                                ethic</em>
                            </li>
                            <li><span
                                className={`${s.blueLine} ${isSoftSkills && s.creativity}`}></span><em>creativity</em>
                            </li>
                            <li><span
                                className={`${s.blueLine} ${isSoftSkills && s.organizationSkills}`}></span><em>organization
                                skills</em>
                            </li>
                        </ul>
                    </div>

                    <div className={s.col}>
                        <h2 className={`${s.languages} ${isLanguages && s.title}`}>languages</h2>
                        <ul ref={languages} className={s.skill}>
                            <li><span
                                className={`${s.greenLine} ${isLanguages && s.javascript}`}></span><em>JavaScript</em>
                            </li>
                            <li><span
                                className={`${s.greenLine} ${isLanguages && s.typescript}`}></span><em>TypeScript</em>
                            </li>
                            <li><span
                                className={`${s.greenLine} ${isLanguages && s.html}`}></span><em>HTML</em>
                            </li>
                            <li><span
                                className={`${s.greenLine} ${isLanguages && s.css}`}></span><em>CSS/SCSS/SASS/Styled</em>
                            </li>
                            <li><span
                                className={`${s.greenLine} ${isLanguages && s.english}`}></span><em>english(A2)</em>
                            </li>
                        </ul>
                    </div>

                    <div className={s.col}>
                        <h2 className={`${s.hardSkills} ${isHardSkills && s.title}`}>hard
                            skill</h2>
                        <ul ref={hardSkills} className={s.skill}>
                            <li>
                                <span
                                    className={`${s.redLine} ${isHardSkills && s.react}`}></span>
                                <em>react</em>
                            </li>
                            <li><span
                                className={`${s.redLine} ${isHardSkills && s.redux}`}></span><em>redux</em>
                            </li>
                            <li><span
                                className={`${s.redLine} ${isHardSkills && s.reduxToolkit}`}></span><em>Redux
                                Toolkit</em>
                            </li>
                            <li><span
                                className={`${s.redLine} ${isHardSkills && s.git}`}
                            ></span><em>git</em></li>
                            <li><span
                                className={`${s.redLine} ${isHardSkills && s.restApi}`}></span><em>rest
                                API</em>
                            </li>
                            <li>
                                <span
                                    className={`${s.redLine} ${isHardSkills && s.materialUI}`}/>
                                <em>Material UI</em>
                            </li>
                            <li>
                                <span
                                    className={`${s.redLine} ${isHardSkills && s.materialUI}`}/>
                                <em>storyBook</em>
                            </li>
                            <li>
                                <span
                                    className={`${s.redLine} ${isHardSkills && s.materialUI}`}/>
                                <em>unit/snapshot testing</em>
                            </li>
                            <li>
                                <span
                                    className={`${s.redLine} ${isHardSkills && s.react}`}/>
                                <em>axios, formik/yup</em>
                            </li>
                            <li>
                                <span
                                    className={`${s.redLine} ${isHardSkills && s.react}`}/>
                                <em>react-router-dom</em>
                            </li>
                            <li>
                                <span
                                    className={`${s.redLine} ${isHardSkills && s.react}`}/>
                                <em>redux-thunk</em>
                            </li>
                            <li>
                                <span
                                    className={`${s.redLine} ${isHardSkills && s.materialUI}`}/>
                                <em>redux-saga</em>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </article>
    );
}