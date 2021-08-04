import React from "react";
import style from "./DistantWorkBlock.module.css"
import styleContainer from '../common/styles/Container.module.css';


type ContactsPropsType = {};

export const Contacts = (props: DistantWorkBlockPropsType) => {
    return <div className={style.myBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>

        </div>
    </div>
}