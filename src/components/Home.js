import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./List";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Fonction pour modifier un index
  const handleEdit = (id, name, age) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
  };

  // Fonction pour supprimer un index
  const handleDelete = (id) => {
    let index = List.map(function (e) {
      return e.id;
    }).indexOf(id);

    List.splice(index, 1);

    navigate("/");
  };

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* Partir d'ici pour aller prendre les données dans le local storage ou l'api
            Actuellement prend dans le fichier List */}
            {List && List.length > 0
              ? List.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>
                        <Link to={"/edit"}>
                          <Button
                            variant="outline-light"
                            onClick={() =>
                              handleEdit(item.id, item.Name, item.Age)
                            }
                          >
                            Edit
                          </Button>
                        </Link>
                        &nbsp;
                        <Button
                          variant="outline-light"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No data available"}
          </tbody>
        </Table>
        <Link to={"/create"}>
          <Button variant="dark" size="lg">
            Create
          </Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
