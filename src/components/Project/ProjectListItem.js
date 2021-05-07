import React from 'react';

import styles from './ProjectListItem.module.css';

function ProjectListItem(props) {
    
    function openModal() {
        props.onProjectChange(props.project);
        props.onOpenModal();
    };
    
    return (
    <div onClick={openModal} className={styles.project} id={props.id}>
        <p className={styles["project-title"]}>{props.project.name}</p>
        <img alt="Project" className={styles["project-img"]} src={props.project.image}/>
        <p className={styles["project-tags"]}>Tags: {[...props.project.tags].join(", ")}</p>
    </div>
    );
};

export default ProjectListItem;

