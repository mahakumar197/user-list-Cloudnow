// src/features/users/UserList.js

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../slice/userSlice";
import { Button, Modal } from "react-bootstrap";
import UserTable from "../Users/userTable/UserTable";
import UserForm from "../Users/userForm/UserForm";

const UserLists = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const userStatus = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    username: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);
console.log(users,"dd");
  const handleAddUser = () => {
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    console.log(newId,newUser,"id")
    const userToAdd = { ...newUser, id: newId };
    dispatch(addUser(userToAdd));
    setNewUser({
      name: "",
      email: "",
      username: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    });
    setShow(false);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  let content;

  if (userStatus === "loading") {
    content = <div>Loading...</div>;
  } else if (userStatus === "succeeded") {
    content = <UserTable users={users} />;
  } else if (userStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div className="container">
      <h1>User List</h1>
      {content}
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm
            newUser={newUser}
            setNewUser={setNewUser}
            handleAddUser={handleAddUser}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserLists;
