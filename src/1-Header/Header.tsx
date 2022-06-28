import React, {useEffect} from 'react';
import s from './Header.module.scss'
import {Nav} from './Nav/Nav';

export const Header: React.FC<{isScrolling: boolean}> = ({isScrolling}) => {
useEffect(()=>{

},[isScrolling])

    return (
        <div className={`${s.header} ${isScrolling && s.isScrolling}`}>
            <Nav/>
        </div>
    );
}