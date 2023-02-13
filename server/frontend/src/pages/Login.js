import React,{useState} from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "../index.css";
import todoImg from "../images/to-do-list1.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function LoginFunc() {
    if (name && password) {
      axios
        .post("/api/auth/login", {
          username: name,
          password: password,
        })
        .then((response) => {
          let data = response.data;
          console.log(data._id);
          localStorage.setItem("id", data._id);
          navigate("/todoapp", { replace: true });
        });
    } else {
      alert("invalid input");
    }
  }

  return (
    <div className="register-sec">
      <Container>
        <Row>
          <Col md={6}>
            <div className="">
              <div className="register">
                <div className="title">
                  <h1>Login Form</h1>
                </div>
                <div className="form">
                  <Form onSubmit={(e)=>{
                    e.preventDefault();
                    LoginFunc();
                    setName('');
                    setPassword('');
                  }}>
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
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="img-sec">
              <img src={todoImg} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
