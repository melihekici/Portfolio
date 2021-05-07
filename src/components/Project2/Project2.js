import React, { useState, useEffect, useRef } from 'react';
import styles from './Project2.module.css';
import axios from 'axios'

function Project2(props) {
    const [shownImage, setShownImage] = useState(null);
    const [classificationResult, setClassificationResult] = useState("");
    
    function pageChangeHandler() {
        props.pageChanger("home");
    };

    const imgElement = useRef();
    useEffect(() => {

        if(shownImage) {
            console.log("Sent Api Request");
            const form = new FormData();
            form.append('image', imgElement.current.files[0]);
            axios.post("https://cors-everywhere-me.herokuapp.com/http://54.237.55.50:5000/classify", form).then(res => setClassificationResult(res.data.files));
        }else {
            setClassificationResult("Choose Image")
        }
    }, [shownImage]);


    function imageUploadHandler(event) {
        if(event.target.files && event.target.files[0]) {
            const fileName = event.target.files[0]['name'].toLowerCase();
            if(fileName.includes('.jpg') || fileName.includes('.png') || fileName.includes('.jpeg')) {;

                imgElement.current.onload = () => {
                    URL.revokeObjectURL(imgElement.current.src)
                };

                setShownImage(URL.createObjectURL(event.target.files[0]));
            }else {
                setShownImage(null);
            }
        }
    };
    
    return (
    <React.Fragment>
    <h1>
        <img alt="Back" onClick={pageChangeHandler} className={styles["back-button"]} width="25rem" src="https://image.flaticon.com/icons/png/512/60/60577.png"/>
        Web Content Filtering
    </h1>
    <div className={styles.sourceCode}>
        <p>Source Codes (For Backend API): <a target="_blank" rel="noreferrer" href="https://github.com/melihekici/ImageClassificationExampleApi">Image Classification API</a></p>
    </div>
    <div className={styles['image-div']}><img alt="Classification" className={styles.myImg} id="myImg" src={shownImage}/></div>
    <div className={styles['input-div']}>
        <input ref={imgElement} onChange={imageUploadHandler} type='file' />
    </div>
    <div className={styles['classification-div']}>Classification Result: {classificationResult}</div>
    <div className={styles['project-info']}>
        <h2>Project Info</h2>
        <p>This is a web content filtering project based on deep learning and image classification.</p>
        <p>It aims to classify the screen view into 3 different categories: Normal Content, Violence Content and Adult Content.</p>
        <p>To achieve this, I have trained an image classification model using Tensorflow and Keras libraries. After training the model, i have converted the model to tflite and currently able to run it on android mobile devices.</p>
        <p>But for this demo, I have created an API using Flask and Docker and deployed my project to AWS.</p>
        <p>Using the interface above, you can upload your image to this website. After you upload your image, a post request will be sent to my Flask API and classification result will be returned to this webpage.</p>
        <p style={{fontWeight: "600"}}>Please explore my project using this app and leave a feedback.</p>
    </div>
    </React.Fragment>
    );
};

export default Project2;