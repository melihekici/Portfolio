import React from 'react';

import styles from './AboutMe.module.css';

function AboutMe(props) {
    return(
        <div className={styles['about-div']}>
            <img alt="Me" className={styles['my-image']} src="https://media-exp1.licdn.com/dms/image/C4E03AQGji9lWkNw1yg/profile-displayphoto-shrink_800_800/0/1600437083110?e=1624492800&v=beta&t=X0KG4lXc93WGXdceUKz6lo4k0K_Y9Gu2Lo81oUZluRk"/>
            <p>Welcome to my web app. My name is Melih Ekici. I am an Industrial Engineer Graduated from METU. I am generally interested in Deep Learning and Web Development. I have experience with Python programming language and with some libraries like Keras, Tensorflow, Selenium, Flask and some other. I also have some experience with JavaScript and React. Lastly, i sometimes use Java to be able to run my deep learning models in mobile devices. You can find demos of some of my projects on this webpage. Looking for feedbacks.</p>
        </div>
    );
};

export default AboutMe;