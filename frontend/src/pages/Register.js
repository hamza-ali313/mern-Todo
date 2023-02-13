import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";
import todoImg from "../images/to-do-list1.jpg";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function RegisterFunc() {
    if (name && email && password) {
      axios
        .post("/api/auth/", {
          username: name,
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          navigate("/Login", { replace: true });
        });
    } else {
      alert("invalid input");
    }
  }

  return (
    <div className="register-sec">
      <Container>
        <Row>
          <Col md={6} lg={6} sm={12}>
            <div className="">
              <div className="register">
                <div className="title">
                  <h1>Register Form</h1>
                </div>
                <div className="form">
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      RegisterFunc();
                      setName("");
                      setEmail("");
                      setPassword("");
                    }}
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="User Name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                    <div>
                      <p> If You are already registered</p>
                      <Link to={"Login"}>Login</Link>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} sm={12}>
            <div className="img-sec">
              <img src={todoImg} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
