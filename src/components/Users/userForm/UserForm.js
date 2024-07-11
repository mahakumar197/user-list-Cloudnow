import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const UserForm = ({ newUser, setNewUser, handleAddUser }) => {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false || newUser.phone.length !== 10) {
      setError("Please fill out all fields correctly.");
      setValidated(true);
    } else {
      handleAddUser();
    }
  };

  const handleAddressChange = (e) => {
    setNewUser({ ...newUser, address: e.target.value });
  };

  const handleCompanyValueChange = (e) => {
    setNewUser({ ...newUser, company: e.target.value });
  };
  const addressValue =
    typeof newUser.address === "object" ? "" : newUser.address;

  const companyValue =
    typeof newUser.company === "object" ? "" : newUser.company;

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formUserName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formUserEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formUserUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter username"
            value={newUser.username}
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
          />
          <Form.Control.Feedback type="invalid">
            Please provide a username.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formUserAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter address"
            value={addressValue}
            onChange={handleAddressChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide an address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formUserPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter phone"
            value={newUser.phone}
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
            isInvalid={newUser.phone && newUser.phone.length !== 10}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid 10-digit phone number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formUserWebsite">
          <Form.Label>Website</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter website"
            value={newUser.website}
            onChange={(e) =>
              setNewUser({ ...newUser, website: e.target.value })
            }
          />
          <Form.Control.Feedback type="invalid">
            Please provide a website.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formUserCompany">
          <Form.Label>Company</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter company name"
            value={companyValue}
            onChange={handleCompanyValueChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a company name.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Add User</Button>
      </Form>
    </>
  );
};

export default UserForm;
