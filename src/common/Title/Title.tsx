import React from 'react';
import styles from './Title.module.css';
type TitlePropsType = {
    text: string
}
export const Title = function Title(props: TitlePropsType) {
    return (
        <div className={styles.title}>
           <h2 >{props.text}</h2>
        </div>
    );
}


