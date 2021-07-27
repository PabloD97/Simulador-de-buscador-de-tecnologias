import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";

const Technology = (props) => {
  
  const { name, logo, description, _id } = props.tecnologia;

  return (
    <Fragment>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button href={`/technology/${_id}`}>See more...</Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Technology;
