import React from 'react';
import styles from './Project3.module.css';


function Project3(props) {
    function pageChangeHandler() {
        props.pageChanger("home");
    };

    return(
        <React.Fragment>
            <h1>
                <img alt="Back" onClick={pageChangeHandler} className={styles["back-button"]} width="25rem" src="https://image.flaticon.com/icons/png/512/60/60577.png"/>
                Kaggle Notebooks
            </h1>

            <div className={styles['notebook-div']}>
                <h2>Titanic Challenge</h2>
                <img className={styles['challenge-img']} alt="Titanic Challenge" src="https://storage.googleapis.com/kaggle-competitions/kaggle/3136/logos/header.png"></img>
                <p>Link to my Kaggle Notebook: <a target="_blank" rel="noreferrer" href="https://www.kaggle.com/melihekici/80-14-accuracy-with-eda-and-feature-engineering">Titanic</a></p>
                <p>This is a machine learning challenge for learning purposes provided by <a target="_blank" rel="noreferrer" href="https://www.kaggle.com/c/titanic">Kaggle</a>. 
                    In this challenge you are building a machine learning model which predicts if a person will survive the Titanic Disaster or not, based on given data about the person.
                </p>
                <p>
                    You can check my solution from the link above.
                </p>
            </div>
            <hr/>
            <div className={styles['notebook-div']}>
                <h2>Housing Prices</h2>
                <img className={styles['challenge-img']} alt="Housing Price" src="https://storage.googleapis.com/kaggle-competitions/kaggle/5407/media/housesbanner.png"></img>
                <p>Link to my Kaggle Notebook: <a target="_blank" rel="noreferrer" href="https://www.kaggle.com/melihekici/exercise-machine-learning-competitions">Housing Prices</a></p>
                <p>Another <a target="_blank" rel="noreferrer" href="https://www.kaggle.com/c/home-data-for-ml-course">Kaggle challenge</a> for tutorial purposes.</p>
                <p>In this challange, you are given a dataset that contains some data about houses together with the price of the houses.</p>
                <p>Your task is to build a machine learning model to predict the prices of the houses in the test set.</p>
                <p>
                    You can check my solution from the link above.
                </p>
            </div>
            <hr/>
            <div className={styles['notebook-div']}>
                <h2>Digit Recognizer</h2>
                <img className={styles['challenge-img']} alt="Digit Recognizer" src="https://storage.googleapis.com/kaggle-competitions/kaggle/3004/logos/header.png"></img>
                <p>Link to my Kaggle Notebook: <a target="_blank" rel="noreferrer" href="https://www.kaggle.com/melihekici/exercise-machine-learning-competitions">Digit Recognizer</a></p>
                <p>Another <a target="_blank" rel="noreferrer" href="https://www.kaggle.com/c/digit-recognizer">Kaggle challenge</a> where a set of handwritten digits and their labels are given to you as training set.</p>
                <p>Your aim is to build a machine learning model that can read the handwritten digits.</p>
                <p>Mostly, for such kind of tasks, Deep learning models are used. But for learning purposes, i have decided not to use a deep learning model but instead i have used KNN. It is not as accurate as CNNs though.</p>
                <p>You can check my solution from the link above.</p>
            </div>
        </React.Fragment>
    );
};

export default Project3;