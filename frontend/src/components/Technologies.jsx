import React, { Fragment, useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import Technology from "./Technology.jsx";
import {CardGroup} from 'react-bootstrap'

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    getTechnologies();
  }, []);

  const getTechnologies = () => {
    axios
      .get("http://localhost:5000/api/technologies")
      .then((result) => {
        setTechnologies(result.data.data);
      })
      .catch(console.log);
  };

  return (
    <Fragment>
      <NavBar />
      <h1>Technologies</h1>
      Backend and Frontend
      <div>
            {technologies.map(t=> {
                console.log(t)
                return <Technology tecnologia={t}/>})}
      </div>
    </Fragment>
  );
};

export default Technologies;
