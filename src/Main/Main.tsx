import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'


export const Main = function() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>My name is Ash</h1>
                    <p>a UI/Frontend developer</p>
                    </div>
                <div className={style.photo}>
                </div>
            </div>
        </div>
    );
}

