import React from 'react';
import styles from './Project4.module.css';

function Project4(props) {
    function pageChangeHandler() {
        props.pageChanger("home");
    };

    return (
        <React.Fragment>
            <h1>
                <img alt="Back" onClick={pageChangeHandler} className={styles["back-button"]} width="25rem" src="https://image.flaticon.com/icons/png/512/60/60577.png"/>
                React Portfolio App
            </h1>
            <div className={styles['content-div']}>
                <p>I have built this portfolio app using React framework.</p>
                <p>In this project, i have tried to include different React concepts to my app.</p>
                <p>Some components are re-usable: Project Windows on HomePage, Chat Baloon, Chat Screen, Modal and Backdrop layout etc. </p>
                <p>I have used different hooks inside the project: useState, useRef, useEffect etc. I decided not to use useContext for now. Instead i am sending all of the required information through props.</p>
                <p>I am not using any routers to switch between the pages for now. Instead, i am using states in App.js and rendering different pages conditionally based on current state. I have defined a function inside App.js to handle page switching and sending this function to other pages with props.</p>
                <p>If you want to get more information about the app, you can find my source codes from the link below, or you can use the Chat Baloon to reach out to me.</p>
                <p>
                    Source Code: <a target="_blank" rel="noreferrer" href="https://github.com/melihekici/Portfolio">Portfolio</a>
                </p>
            </div>
        </React.Fragment>
    );
};

export default Project4;