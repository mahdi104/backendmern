import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { add } from "../../JS/Action/Action";

const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "", phone: 1 });
  const dispatch = useDispatch();
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter your name"
            onChange={(e) => {
              {
                setContact({ ...contact, name: e.target.value });
              }
            }}
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              {
                setContact({ ...contact, email: e.target.value });
              }
            }}
          />
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="Number"
            placeholder="Phone Number"
            onChange={(e) => {
              {
                setContact({ ...contact, phone: e.target.value });
              }
            }}
          />
          <Form.Text className="text-muted">Welcome to Ezdine Beach</Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            dispatch(add(contact));
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddContact;
