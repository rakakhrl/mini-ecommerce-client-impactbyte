import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { register } from "../redux/actions/authAction";

const RegisterPage = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    role: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((store) => store.user.isLogin);

  useEffect(
    () => {
      if (isLogin) {
        history.push("/home");
      }
    },
    // eslint-disable-next-line
    [isLogin]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(data));
  };

  return (
    <div style={{ paddingLeft: "100px", paddingRight: "100px" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => setData({ ...data, first_name: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your las name"
            onChange={(e) => setData({ ...data, last_name: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="role">
          <Form.Label>Role</Form.Label>
          <Form.Control
            as="select"
            custom
            onChange={(e) => setData({ ...data, role: e.target.value })}
          >
            <option value="">Choose Role</option>
            <option value="CUSTOMER">Customer</option>
            <option value="ADMINISTRATOR">Admin</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
