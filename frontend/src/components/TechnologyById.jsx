import React, { Fragment, useEffect, useState } from "react";
import { Card, Button, ListGroup} from "react-bootstrap";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";

//TODO: Falta agregar los tags en el contenido que se muestra en pantalla
const TechnologyById = () => {
  const { id } = useParams();
  useEffect(() => {
    getTechnolyById();
  }, []);

  const [technology, setTechnology] = useState({});

  const getTechnolyById = () => {
    axios
      .get(`http://localhost:5000/api/technology/${id}`)
      .then((result) => setTechnology(result.data.data))
      .catch(console.log);
  };

  const {tags} = technology;

  return (
    <Fragment>
      <NavBar />
        <h1>{technology.name}</h1>
        {console.log(technology)}
      <ListGroup horizontal>
        <ListGroup.Item>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={technology.logo} />
            <Card.Body>
              <Button href="/technologies">Go back</Button>
            </Card.Body>
          </Card>
        </ListGroup.Item>
        <ListGroup.Item>
            <h5>{technology.name}</h5>
            <br/>
            {technology.description}
            <br/>
        </ListGroup.Item>
      </ListGroup>
    </Fragment>
  );
};

export default TechnologyById;
