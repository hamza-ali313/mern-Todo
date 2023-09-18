import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import "../index.css";
import { useNavigate } from "react-router-dom";
const TodoApp = () => {
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");
  const [data, setData] = useState([]);

  let localStorage_id = localStorage.getItem("id");
  const navigate = useNavigate();
  function fetchTodo(user_id) {
    axios.get(`/api/todos/${user_id}`).then((response) => {
      setData(response.data);
    });
  }
  useEffect(() => {
    fetchTodo(localStorage.getItem("id"));
  }, []);
  const createTodo = (text) => {
    axios
      .post("/api/todos/", {
        id: localStorage.getItem("id"),
        text: text,
      })
      .then((response) => {
        // console.log(response);
        setData(response.data);
      });
  };

  function deleteTodo(id) {
    axios
      .post(`/api/todos/${id}`, {
        localStorage_id: localStorage_id,
      })
      .then((res) => {
        setData(res.data);
      });
  }

  function editTodo(todo_id) {
    axios
      .put(`/api/todos/checkediting/${todo_id}`, {
        user_ID: localStorage_id,
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }
  function updateTodo(todo_id) {
    axios
      .put(`/api/todos/checkediting/${todo_id}`, {
        user_ID: localStorage_id,
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    axios
      .put(`/api/todos/update/${todo_id}`, {
        user_ID: localStorage_id,
        text: editText,
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }

  function completeTodo(id) {
    axios.post(`/api/todos/complete/${id}`,{
      user_ID:localStorage_id
    }).then((res) => {
      setData(res.data);
    });
  }

  // logout
  function logout() {
    navigate("/Login", {
      replace: true,
    });
    localStorage.clear();

  }

  return (
    <>
      <Container>
        <div className="todo-app">
          <Button onClick={logout}>Logout</Button>
          <div className="todo-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!text) return;
                createTodo(text);
                setText("");
              }}
            >
              <input
                onChange={(e) => setText(e.target.value)}
                value={text}
                type="text"
              />
              <button>Add </button>
            </form>
          </div>
          <div className="todos-sec">
            <ul>
              {data.map((todo, i) => (
                <>
                  <li key={todo.id}>
                    <div className="text-sec">
                      {!todo.editing ? (
                        <p
                          style={{
                            textDecoration:
                              todo.completed === true ? "line-through" : "",
                          }}
                        >
                          {todo.text}{" "}
                        </p>
                      ) : (
                        <div className="edit-sec">
                          <input
                            value={todo.editing ? editText : todo.text}
                            // value={editText}
                            type="text"
                            onChange={(e) => {
                              setEditText(e.target.value);
                            }}
                          />
                          <button
                            onClick={() => {
                              updateTodo(todo._id);
                            }}
                          >
                            Update
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="btns-sec">
                      <button
                        onClick={() => {
                          deleteTodo(todo._id);
                        }}
                      >
                        DELETE
                      </button>
                      <button
                        style={{
                          backgroundColor:
                            todo.completed === true ? "green" : "#e12727",
                        }}
                        onClick={() => {
                          completeTodo(todo._id);
                        }}
                      >
                        {todo.completed === true ? "completed" : "complete"}
                      </button>
                      <button
                        onClick={() => {
                          editTodo(todo._id);
                          setEditText(todo.text);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TodoApp;
