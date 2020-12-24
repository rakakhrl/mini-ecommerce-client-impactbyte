import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { login } from "../redux/actions/authAction";

const LoginPage = () => {
  const [credential, setCredential] = useState({
    identifier: "",
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
    dispatch(login(credential));
  };

  return (
    <div style={{ padding: "200px" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="identifier">
          <Form.Label>Username / E-mail</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username or e-mail"
            onChange={(e) =>
              setCredential({ ...credential, identifier: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setCredential({ ...credential, password: e.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
