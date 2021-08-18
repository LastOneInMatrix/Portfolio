import React from 'react';
import styles from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./Skill/Skill";
import {Title} from "../common/Title/Title";
function Skills() {
    return (
        <div className={styles.skillsBlock}>
                <div className={`${styleContainer.container}  ${styles.skillsContainer}`}>
                    <Title text={'My Skills'}/>
                    <div className={styles.skills}>
                        <Skill title={'CSS/HTML'} description={'Lorem isssdasdas asdasdpsum dolor sit amet.'}/>
                        <Skill title={'JS'} description={'Lorem ipsum do asadalor sit amet.'}/>
                        <Skill title={'React/Redux'} description={'Lorem i asdasdasasdas asdsd dsffpsum dolor sit amet.'}/>
                        <Skill title={'CSS/HTML'} description={'Lorem isssdasdas asdasdpsum dolor sit amet.'}/>
                        <Skill title={'JS'} description={'Lorem ipsum do asadalor sit amet.'}/>
                        <Skill title={'React/Redux'} description={'Lorem i asdasdasasdas asdsd dsffpsum dolor sit amet.'}/>
                        <Skill title={'CSS/HTML'} description={'Lorem isssdasdas asdasdpsum dolor sit amet.'}/>
                        <Skill title={'JS'} description={'Lorem ipsum do asadalor sit amet.'}/>
                    </div>

                </div>
        </div>
    );
}

export default Skills;
