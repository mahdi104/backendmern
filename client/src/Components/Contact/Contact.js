import React from "react";
import { Button, Card } from "react-bootstrap";
import "../Contact/Contact.css";
const Contact = ({ el }) => {
  return (
    <div>
      <Card className="Card">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            <p>Contact</p>
            {el.email}
            {el.phone}
          </Card.Text>
          <Button variant="primary">Delete</Button>
          <Button variant="primary">Edit</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
