import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import { v4 as uuid } from "uuid"; // Identifiant unique
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();

  let index = List.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut de la fonction

    let a = List[index];
    a.Name = name;
    a.Age = age;

    navigate("/"); // Navigue vers la page d'accueil
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div>
      <Form style={{ margin: "15rem" }}>
        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter age"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={() => navigate("/")}>Cancel</Button>
        &nbsp;
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
