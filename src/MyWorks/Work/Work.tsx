import React from 'react';
import styleWorks from "./Work.module.css";

type WorkPropsType = {
    imgSrc: string;
    description: string;
    title: string;
    style: any
}
function Work(props: WorkPropsType) {
    return (
        <div className={styleWorks.work} >
            <div className={styleWorks.workPicture} style={props.style}>
                <button className={styleWorks.viewButton}>Смотреть</button>
            </div>
            <div className={styleWorks.description}>
                <span >
               <h3 className={styleWorks.projectTitle}>{props.title}</h3>
                 </span>
                <span className={styleWorks.descriptionText}>
               <p>{props.description}</p>
                 </span>
            </div>
        </div>
    );
}

export default Work;