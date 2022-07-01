import React, {FormEvent, useState} from 'react';
import sContainer from '../common/styles/Conteiner.module.css'
import s from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import emailIcon from '../assets/icons/email.png'
import phoneIcon from '../assets/icons/phone.png'
import {ReactComponent as Preloader} from '../assets/preloader/pulse.svg';
import Fade from 'react-reveal/Fade';

type FormValues = {
    name: string
    email: string
    message: string
}

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || process.env.REACT_APP_BACK_REMOTE_URL
});

export const Contacts = () => {
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            message: Yup.string()
                .required('Required'),
        }),
        onSubmit: async values => {
            setDisabled(true)
            setIsSuccess(false)
            await instance.post('/sendMessage', values)
            setDisabled(false)
            setIsSuccess(true)
        },
    });

    const disabledButton = disabled || !!formik.errors.email || !!formik.errors.name || !!formik.errors.message
    return (
        <article id='contacts' className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <Title title1={'Contact Me'}
                       title2={'I Will Be Glad To Hear From You'}/>
                <div className={s.info}>
                    <Fade bottom>
                        <div className={s.addressBlock}>
                            <div className={s.email}>
                                <img className={s.emailIcon} src={emailIcon}
                                     alt="emailIcon"/>
                                <span>Email</span>
                                <span>mihagoroh@gmail.com</span>
                            </div>
                            <div className={s.email}>
                                <img className={`${s.emailIcon} ${s.phoneIcon}`}
                                     src={phoneIcon} alt="phoneIcon"/>
                                <span>Phone</span>
                                <span>+37525 935 69 02</span>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <form className={s.formBlock} onSubmit={formik.handleSubmit}>

                            <div className={s.inputBlock}>
                                <input className={s.input}
                                       placeholder=" " id="email"
                                       type="text"
                                       {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className={s.error}>{formik.errors.email}</div>
                                ) : null}
                                <label htmlFor="email">email</label>
                            </div>

                            <div className={s.inputBlock}>
                                <input className={s.input}
                                       placeholder=" " id="name"
                                       type="text"
                                       {...formik.getFieldProps('name')}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className={s.error}>{formik.errors.name}</div>
                                ) : null}
                                <label htmlFor="name">name</label>
                            </div>

                            <div className={s.inputBlock}>
                        <textarea className={s.input}
                                  placeholder=" "
                                  id="message"
                                  {...formik.getFieldProps('message')}
                        />
                                {formik.touched.message && formik.errors.message ? (
                                    <div className={s.error}>{formik.errors.message}</div>
                                ) : null}
                                <label htmlFor="name">
                                    write your message here
                                </label>
                            </div>

                            <button
                                className={`${s.button} ${disabledButton && s.disabledButton}`}
                                type={'submit'}
                                disabled={disabledButton}>send

                            </button>
                            {disabled && <Preloader className={s.preloader}/>}
                            {isSuccess && <span
                                className={s.messageSuccess}>the message has been sent</span>}
                        </form>
                    </Fade>
                </div>
            </div>
        </article>
    );
}