import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import { v4 as uuid } from "uuid"; // Identifiant unique
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut de la fonction

    const ids = uuid(); // Génere un id unique
    let uniqueId = ids.slice(0, 8); // Extrait les 8 premiers caractères de l'id

    let a = name,
      b = age;

    List.push({ id: uniqueId, Name: a, Age: b }); // Ajoute un objet à List

    navigate("/"); // Navigue vers la page d'accueil
  };

  return (
    <div>
      <Form style={{ margin: "15rem" }}>
        <Form.Group controlId="formName">
          <Form.Control
            type="text"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="formAge">
          <Form.Control
            type="text"
            placeholder="Enter age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={() => navigate("/")}>Cancel</Button>
        &nbsp;
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Create;
