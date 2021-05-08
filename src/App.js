import React, { useState } from "react";
import Project2 from "./components/Project2/Project2";
import HomePage from "./Pages/HomePage";
import Project1 from "./components/Project1/Project1";
import Project3 from "./components/Project3/Project3";
import Project4 from "./components/Project4/Project4";
import Tfjs from "./components/TensorflowJSComponent/TFJS";


function App() {
  const [currentPage, setCurrentPage] = useState("home");

  function pageChangeHandler(newPage) {
    setCurrentPage(newPage);
  };

  return (
    <React.Fragment>
      {currentPage==="home" && <HomePage pageChanger={pageChangeHandler}></HomePage>}
      {currentPage==="Project1" && <Project1 pageChanger={pageChangeHandler}></Project1>}
      {currentPage==="Project2" && <Project2 pageChanger={pageChangeHandler}></Project2>}
      {currentPage==="Project3" && <Project3 pageChanger={pageChangeHandler}></Project3>}
      {currentPage==="Project4" && <Project4 pageChanger={pageChangeHandler}></Project4>}
      {currentPage==="Project6" && <Tfjs pageChanger={pageChangeHandler}></Tfjs>}
      <footer>
          <ul>
              <li>
                Email: <a href="mailto:melih.ekici4@gmail.com">melih.ekici4@gmail.com</a>
              </li>
              <li>
                Github: <a target="_blank" rel="noreferrer" href="https://github.com/melihekici">https://github.com/melihekici</a>
              </li>
              <li>
                Linkedin: <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/melih-ekici-02189714b/">https://www.linkedin.com/in/melih-ekici-02189714b/</a>
              </li>
          </ul>
      </footer>
    </React.Fragment>
  );
}

export default App;
