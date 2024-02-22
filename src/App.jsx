import React, { useState, useEffect } from "react";
import { createUser, deleteUser, getUsers } from "./helpers/UserMethod";
import ModalFormActivity from "./components/admin/ModalFormActivity";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersFunction = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    getUsersFunction();
  }, []);

  return (
    <div className='App'>
      <input
        placeholder='Name...'
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      <input
        type='number'
        placeholder='Age...'
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />

      <button onClick={() => createUser(newName, newAge)}> Create User</button>
      {users?.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button
              onClick={() => {
                updateUser(user.id, user.age);
              }}
            >
              {" "}
              Increase Age
            </button>
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete User
            </button>
          </div>
        );
      })}
      <ModalFormActivity />
    </div>
  );
}

export default App;
