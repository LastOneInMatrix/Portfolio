import React from 'react';
import st from "./Work.module.css";

type WorkPropsType = {
    imgSrc: string
}
function Work(props: WorkPropsType) {
    return (
        <div className={st.work} >
            <div className={st.workPicture} style={{}}>
                <button>Смотреть</button>
            </div>
            <div className={st.description}>
                <span >
               <p>Название проекта</p>
                 </span>
                <span >
               <p>Lorem ipsum dolor ecati, porro quam quasi ratione soluta tempore voluptas!</p>
                 </span>
            </div>
        </div>
    );
}

export default Work;