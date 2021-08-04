import React from "react";
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css';


type ContactsPropsType = {};

export const Contacts = (props: ContactsPropsType) => {
    return <div className={style.contactsBlock}>
        <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <h3 style={{margin: '0px'}}>Контакты</h3>
            <form className={style.contactsBlockForm}>
                <input type='text' placeholder={'Name:'} name={'Name'}></input>
                <input type='text' placeholder={'Email:'} name={'Email'}></input>
                <input className={style.textareaInput}type="textarea" name="textValue" placeholder={'Some message:'}/>
                <input  type="submit" value="Submit" />
            </form>
            <div className={styleContainer.buttonBlock}>

                <button  onSubmit={void 0} className={styleContainer.button}>Отправить</button>
            </div>


        </div>
    </div>
}