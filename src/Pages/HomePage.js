import React, { useState } from "react";
import AboutMe from "../components/About/AboutMe";
import ProjectList from "../components/Project/ProjectList";

import project1Image from "../assets/Python Developer.jpg";
import project2Image from "../assets/p2.png"
import Modal from "../components/UI/Modal/Modal";
import ChatBaloon from "../components/UI/Ballons/ChatBaloon";
import ComponentImage from "../assets/Screenshot from 2021-05-08 14-44-49.png"

const projects = [
  {
    id: "Project1",
    name: "Linkedin Job Scrapper",
    image: project1Image,
    description: "This is a small web scraping project to scrape linkedin Jobs. The scrapper has a GUI that will take a search term(eg. 'Python Developer') and a Location(eg. 'Turkey') and then it will return the mostly mentioned tech skills required for that position.",
    tags: ["Python", "Java","Selenium"]
  },
  {
    id: "Project2",
    name: "Web Content Filtering",
    image: project2Image,
    description: "An image classification project for web content filtering on mobile devices. For the demo, i have created a Flask API with docker as backend which will classify images as Normal, Violence and Adult. From the react app, you will be able to choose your own image from your computer and classify by sending request to the API.",
    tags: ["Image Classification", "Python", "JavaScript","Docker", "Flask"]
  },
  {
    id: "Project3",
    name: "Kaggle Notebooks",
    image: "https://miro.medium.com/max/500/1*K5NPQiLmq30qmkySiVb5JQ.jpeg",
    description: "This page containts couple of kaggle challenges that i have completed. You can find the descriptions for the challenges and links to my kaggle notebooks inside the page.",
    tags: ["Kaggle", "Machine Learning", "Python"]
  },
  {
    id: "Project4",
    name: "Personal Portfolio",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png",
    description: "In this page you can find information about my portfolio app together with the source codes.",
    tags: ["JavaScript", "React"]
  },
  {
    id: "Project5",
    name: "Users-Items Database API",
    image: "https://nickjanetakis.com/assets/blog/cards/flask-libraries-for-building-awesome-real-world-restful-apis-909c9f55ee81f2a90344da2985159812423196d09a106d936534312ffa10be50.jpg",
    description: "This is a Restful API written with Python and Flask. It uses a MondgoDB database and keeps the users in the database. Every user has a list of items in which they can add a new change, change an existing one, delete an item. Users are registering to the api by sending a request. Usernames and hashed passwords are stored in a database. Please visit the git repository from the link below for more information.",
    tags: ["Python", "Flask", "MongoDB", "Docker"],
    link: "https://github.com/melihekici/user-item-api"
  },
  {
    id: "Project6",
    name: "TFjs Classification Component",
    image: ComponentImage,
    description: "In this page, i share my react component for image classification using tensorflowjs model. You can find information on how to convert a h5 model to a tensorflowjs model and use it inside your react web application without using any backend APIs.",
    tags: ["Python", "Tensorflowjs", "React"],
  }
];


function HomePage(props) {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const modalVisibleHandler = () => {
    setModalVisible((prevState) => {
      prevState ? setModalVisible(false) : setModalVisible(true);
    });
  };

  const projectChangeHandler = (project) => {
    setCurrentProject(project);
  };

  return (
    <React.Fragment>
      <h1 style={{textAlign: "center"}}>Welcome to my portfolio</h1>
      <Modal pageChanger={props.pageChanger} onCloseModal={modalVisibleHandler} visible={modalVisible} project={currentProject}></Modal>
      <AboutMe></AboutMe>
      <ProjectList pageChanger={props.pageChanger} onOpenModal={modalVisibleHandler} onProjectChange={projectChangeHandler} projects={projects}></ProjectList>
      <ChatBaloon></ChatBaloon>
    </React.Fragment>
    );
};
  
export default HomePage;
  
