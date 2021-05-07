import React from 'react';

import styles from './Modal.module.css';

function Overlay(props) {
    return (
        <div className={styles.overlay}  onClick={props.onClick}/>
    )
};

function Modal(props) {

    function closeModal() {
        props.onCloseModal();
    };

    function pageChangeHandler() {
        if(props.project.link){
            window.open(props.project.link, '_blank');
        }else {
            props.pageChanger(props.project.id);
        }
        
    };

    return (
        <React.Fragment>
            {props.visible && <Overlay onClick={closeModal}></Overlay>}
            <div className={`${styles.modal} ${!props.visible && styles.hidden}`}>
                <button onClick={closeModal} className={styles['close-modal']}>&times;</button>
                <h1>{props.project?.name}</h1>
                <p>{props.project?.description}</p>
                <a onClick={pageChangeHandler} href="#">Go to project</a>
            </div>
        </React.Fragment>
    );
};

export default Modal;