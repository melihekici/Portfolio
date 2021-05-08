import React from 'react';
import styles from './TFJS.module.css';
import tfjsFolder from '../../assets/tfjsFolder.png';
import modelJSON from "../../assets/modelJSON.jpg";
import folder from '../../assets/folder.jpg';
import Classifier from '../ImageClassification/Classifier';
import ClassifierComponent from "../../assets/ClassifierComponent.jpg"

function Tfjs(props) {
    function pageChangeHandler() {
        props.pageChanger("home");
    };

    return (
        <React.Fragment>
            <h1>
                <img alt="Back" onClick={pageChangeHandler} className={styles["back-button"]} width="25rem" src="https://image.flaticon.com/icons/png/512/60/60577.png"/>
                Resuable React Component for Image Classification
            </h1>
            <div className={styles['content-div']}>
                <h2>Introduction</h2>
                <p>In this page, i am going to share a react component for image classification.</p>
                <p>Using this component, you can easily showcase your image classification models inside your web app without using any backend APIs.</p>
                <p>In my portfolio, i had a project that classifies the pictures into Normal, Adult and Violence categories. That project was using an API which i have built using FLASK. The backend was calculating the results for the classification and sending it back to this app.</p>
                <p>Here, we will use the same model again, but this time we will not use any backends. Instead, i am going to show you how to convert your keras model to tensorflowjs model and share my react component for image classification.</p>
                <h2>Converting Keras Model to Tensorflowjs Model</h2>
                <p>You can convert your ".h5" model into a tensorflowjs model by executing the command below.</p>
                <code>
                    tensorflowjs_converter --input_format keras 
                    path/to/my_model.h5 
                    path/to/tfjs_target_dir
                </code>
                <br/><br/>
                <p>After you convert your model to tensorflowjs, you will get a model.json file and binary files.</p>
                <img src={tfjsFolder} alt="tensorflowjs directory" width="600px" />
                <br/><br/>
                <p>When you open model.json file, change modelTopology.model_config.class_name from "Functional" to "Model"</p>
                <img src={modelJSON} alt="modelJSON" width="600px" />
                <br/><hr/>
                <h2>Adding Dependencies</h2>
                <p>Add the following dependencies to your package.json file.</p>
                <code>"@tensorflow/tfjs": "^1.7.4"<br/>"tfjs": "^0.6.0"</code>
                <br/><hr/>
                <h2>React Component for Image Classification</h2>
                <p>First, you need to copy your model.json file and the binary files to the public folder inside your react app.</p>
                <p>Inside my <a href="https://github.com/melihekici/reactComponents" rel="noreferrer">github repository</a>, inside src/components folder, you can find my react component for image classification.</p>
                <p>Take the ImageClassification folder and put it to your components folder.</p>
                <img src={folder} alt="folder" width="200px"></img>
                <p style={{fontWeight: "bold"}}>Lastly, you need to change the labels inside labels.js with your model's output labels.</p>
                <br/>
                <p>Now, you can put the component inside anywhere in your app.</p>
                <p>You need to pass the input sizes of your model with props to the component. If you do not pass them, the default size is 224x224</p>
                <img src={ClassifierComponent} alt="Classifier Component" ></img>
                <h2>The Component</h2>
                <Classifier width={224} height={224}></Classifier>
                <p>
                    Source Code: <a target="_blank" rel="noreferrer" href="https://github.com/melihekici/reactComponents">Components</a>
                </p>
            </div>
        </React.Fragment>
    );
};

export default Tfjs;