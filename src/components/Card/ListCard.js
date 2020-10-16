import React from 'react';
import { Col } from '../Grid';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";

const Cards = ({ array }) => {
    
  return (
    <>
    {array.map(e => 
    <Col size="md-3">
      <Card className="text-center mt-1 mb-4 mr-1">
        <CardImg height="50%" width="50%" src={e.image} alt={e.name} />
        <CardBody>
          <CardTitle><h4>{e.name}</h4></CardTitle>
          {/* <CardSubtitle>{e.name}</CardSubtitle> */}
          <CardText>
          <p>
            Recipe Origin: <strong>{e.cuisine}</strong>
            <br />
            Recipe Category: <strong>{e.category.toString().split(",").join(", ")}</strong>
          </p>
          </CardText>
          <Button className="bg-info custom-text">
          <Link to={{ pathname: "/result", data: e }}>           
            Recipe Details{" "}
            </Link>
            <i className="fas fa-utensils"></i>
            </Button>
        </CardBody>
      </Card>
    </Col>)}
    </>
  );
};

export default Cards;