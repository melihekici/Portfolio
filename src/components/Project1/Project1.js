import React from 'react';

import styles from './Project1.module.css';

import JobScrapperImage1 from '../../assets/LinkedinJobScrapper.JPG';
import JobScrapperImage2 from '../../assets/LinkedinJobScrapper2.JPG';
import OutputImage from '../../assets/Python Developer.jpg';

function Project1(props) {

    function pageChangeHandler() {
        props.pageChanger("home");
    };

    return (
        <React.Fragment>
            <h1>
                <img alt="Back" onClick={pageChangeHandler} className={styles["back-button"]} width="25rem" src="https://image.flaticon.com/icons/png/512/60/60577.png"/>
                Job Scrapper
            </h1>
            <div classname={styles['project-div']}>
                <p className={styles["source-code"]}>Source Code (Python): <a rel="noreferrer" target="_blank" href="https://github.com/melihekici/LinkedInJobScrapper">github.com/melihekici</a></p>
                <p className={styles["source-code"]}>Source Code (Java): <a rel="noreferrer" target="_blank" href="https://github.com/melihekici/-LinkedInJobScrapper-Java-">github.com/melihekici</a></p>
                <hr/>
                <img alt="Job Scrapper" className={styles["project-paragraph-image"]} src={JobScrapperImage1}/>
                <p className={styles["project-paragraph"]}>This app has been written in Python using Selenium.<br/> It has a basic tkinter GUI which will ask you the Job to be searched and the location.</p>
                <hr/>
                <img alt="Python-Selenium" class="project-paragraph-image" src="https://static.javatpoint.com/tutorial/selenium-python/images/selenium-python.png"/>
                <p class="project-paragraph">After you start scraping, a Chrome driver window opens in headless mode(invisible) and searches for the jobs in linkedin using the search term and location specified.<br/>It will scroll down until it reaches at the end of the page and will create an array containing all of the job urls.</p>
                <hr/>
                <img alt="Requests" class="project-paragraph-image" src="https://miro.medium.com/max/700/1*ZSmnw481OjgPRtDR40gQoA.png"/>
                <p class="project-paragraph">After getting all the urls, the Chrome driver will close itself and all of the job lists will be scraped one by one using requests package.
                    <br/>For each job url, the job description content will be extracted from page source.
                    <br/>Tech skills are predefined in a dictionary. For some skills, some aliases are also taken into consideration(example: css and css3 will map to same key value in the dictionary)
                    <br/>Each skill is searched inside of the job description one by one and if found the count is incremented by one.
                    <br/>At the end, we get a dictionary which shows each skill as the key and the number of job postings mentioning that skill as value.
                </p>
                <hr/>
                <img alt="output" style={{width: "755px"}} className={styles["project-paragraph-image"]} src={JobScrapperImage2}></img>
                <p class="project-paragraph">On completion, a word cloud will be created, opened and be saved as {`{Search Term}`}.jpg</p>
                <img alt="output" style={{width: "755px", border: "solid", borderWidth: "thin", marginBottom: "5rem"}} className={styles["project-paragraph-image"]} src={OutputImage}></img>
            </div>
        </React.Fragment>
    );
};

export default Project1;


