import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const addTodo = () => {
    if (todo === "") return;
    console.log("Add!");
    setTodos((prevTodos) => [todo, ...prevTodos]);
    setTodo("");
    console.log(todos);
  };

  return (
    <div>
      <h1>My To Dos ({todos.length}) :)</h1>
      <input
        placeholder="here is todo! :)"
        value={todo}
        onChange={onChange}
      ></input>
      <button onClick={addTodo}>Add To Do</button>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
