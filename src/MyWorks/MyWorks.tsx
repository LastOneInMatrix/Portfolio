import React from 'react';
import styles from './MyWorks.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Work from "./Work/Work";

function Works() {
    return (
        <div className={styles.worksBlock}>
            <div className={`${styleContainer.container}  ${styles.workContainer}`}>
                <h3 style={{margin: '0px'}}>My works</h3>
                <div className={styles.works}>
                    <Work imgSrc={''}/>
                    <Work imgSrc={''}/>
                {/* There was works*/}
                </div>

            </div>
        </div>
    );
}

export default Works;
