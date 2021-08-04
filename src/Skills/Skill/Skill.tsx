import React from 'react';
import st from './Skill.module.css'
type SkillPropsType = {
    title: string;
    description: string
}
function Skill(props: SkillPropsType) {
    return (
        <div className={st.skill}>
            <div className={st.icon}></div>
            <h3>{props.title}</h3>
           <span className={st.description}>
               <p>{props.description}</p>
           </span>
        </div>
    );
}

export default Skill;
