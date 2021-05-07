import React from 'react';

import styles from './ProjectList.module.css';
import ProjectListItem from './ProjectListItem';

function ProjectList(props) {

    const projectsJSX = props.projects.map((project) => {
        return (
            <li key={project.id}>
                <ProjectListItem pageChanger={props.pageChanger} onOpenModal={props.onOpenModal} onProjectChange={props.onProjectChange} project={project}/>
            </li>  
        );
    });

    return (
        <div className={styles['my-projects']}>
            <ul>
                {projectsJSX}
            </ul>
        </div>
    );
};

export default ProjectList;