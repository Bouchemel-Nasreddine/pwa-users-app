import React, { useState, useEffect } from "react";
import {Table} from 'react-bootstrap';

export default function Users() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respsone) => {
        respsone.json().then((result) => {
          console.log(result);
          setUsers(result);
        })
      })
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item) => (
              <tr key="{item}" >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}