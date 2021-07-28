import React, { Fragment, useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import Technology from "./Technology.jsx";
import { useParams } from "react-router-dom";


const ResultSearch = () => {

    const { find } = useParams();


    const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    getTechnologies();
  }, [find]);

  const getTechnologies = () => {
    axios
      .get(`http://localhost:5000/api/technology/search/${find}`)
      .then((result) => {
        setTechnologies(result.data.data);
      })
      .catch(console.log);
  };

  return (
    <Fragment>
      <NavBar />
      <h1>Technologies</h1>
      Searching: {find}
      <div>
            {technologies.map(t=> {
                console.log(t)
                return <Technology tecnologia={t}/>})}
      </div>
    </Fragment>
  );
};

export default ResultSearch;