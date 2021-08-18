import React from 'react';
import styles from './MyWorks.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Work from './Work/Work';
import {Title} from '../common/Title/Title';
import soc from './../assets/img/social.png';
import todo from './../assets/img/todo.png'

function Works() {
    const socialStyle = {
        backgroundImage: `url(${soc})`,
    };
    const todoStyle = {
        backgroundImage: `url(${todo})`,
    };
    return (
        <div className={styles.worksBlock}>
            <div className={`${styleContainer.container}  ${styles.workContainer}`}>
                <Title text={'My Works'}/>
                <div className={styles.works}>
                    <Work style={socialStyle} imgSrc={''} title={'Social network junior'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, sunt.'}/>
                    <Work style={todoStyle} imgSrc={''} title={'TodoList junior+'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, sunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, sunt.'}/>
                {/* There was works*/}
                </div>

            </div>
        </div>
    );
}

export default Works;
