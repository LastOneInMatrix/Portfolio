import React from "react";
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css';


type FooterPropsType = {};

export const Footer = (props: FooterPropsType) => {
    return <div className={style.footerBlock}>
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <h4 style={{marginBottom: '10px', backgroundColor: 'red'}}>Ash Barsegyan 2021</h4>
            <div className={style.iconsBlock}>
                <div className={style.icons}>ic1</div>
                <div className={style.icons}>ic2</div>
                <div className={style.icons}>ic3</div>
                <div className={style.icons}>ic4</div>
            </div>
        </div>

    </div>
}