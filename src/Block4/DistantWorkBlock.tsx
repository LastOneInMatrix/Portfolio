import React from "react";
import style from "./DistantWorkBlock.module.css"
import styleContainer from '../common/styles/Container.module.css';


type DistantWorkBlockPropsType = {};

export const DistantWorkBlock = (props: DistantWorkBlockPropsType) => {
        return <div className={style.myBlock}>
            <div className={`${styleContainer.container} ${style.introContainer}`}>
                <h3 style={{margin: '0px', backgroundColor: 'red'}}>Рассматриваю варианты удаленной работы</h3>
                <div className={styleContainer.buttonBlock}>
                    <button className={styleContainer.button}>Нанять меня</button>
                </div>
            </div>
        </div>
}


