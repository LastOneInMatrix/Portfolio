import React from "react";
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css';
import {Title} from "../common/Title/Title";


type ContactsPropsType = {};

export const Contacts = (props: ContactsPropsType) => {
    return <div className={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <Title text={'Contacts'}/>
            <form className={style.contactsBlockForm}>
                <input type='text' placeholder={'Name:'} name={'Name'}></input>
                <input type='text' placeholder={'Email:'} name={'Email'}></input>
                <input className={style.textareaInput}type="textarea" name="textValue" placeholder={'Some message:'}/>
                {/*<input className={styleContainer.submitButton}  value="Submit" />*/}
                <button type="submit" onSubmit={void 0} className={style.submitButton}>Отправить</button>
            </form>
            <div className={styleContainer.buttonBlock}>
                <button type="submit" onSubmit={void 0} className={styleContainer.button}>Отправить</button>

            </div>
            {/*todo как сделать - что бы кнопки были в одном стиле*/}

        </div>
    </div>
}