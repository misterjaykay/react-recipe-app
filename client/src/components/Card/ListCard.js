import React from "react";
import { Col } from "../Grid";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const Cards = ({ array }) => {
  return (
    <>
      {array.map((e) => (
        <Col key={e._id} size="md-3">
          <Card className="text-center mt-1 mb-4 mr-1">
            <CardImg height="50%" width="50%" src={e.image} alt={e.recipe} />
            <CardBody>
              <CardTitle>
                <h4>{e.recipe}</h4>
              </CardTitle>
              <CardText>
                Recipe Origin: <strong>{e.cuisine}</strong>
                <br />
                Recipe Category:{" "}
                <strong>{e.category.toString().split(",").join(", ")}</strong>
              </CardText>

              <Link to={{ pathname: "/result", data: e }}>
                <Button className="pink-button custom-text">
                  Recipe Details <i className="fas fa-utensils"></i>
                </Button>
              </Link>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Cards;
