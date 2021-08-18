import React from "react";
import style from "./DistantWorkBlock.module.css"
import styleContainer from '../common/styles/Container.module.css';
import {Title} from "../common/Title/Title";


type DistantWorkBlockPropsType = {};

export const DistantWorkBlock = (props: DistantWorkBlockPropsType) => {
        return <div className={style.myBlock}>
            <div className={`${styleContainer.container} ${style.introContainer}`}>
                <Title text={'Distance working available'}/>
                <div className={styleContainer.buttonBlock}>
                    <button className={styleContainer.button}>Нанять меня</button>
                </div>
            </div>
        </div>
}


