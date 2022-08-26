import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

export default function App() {
  const [value, setValue] = useState("");
  const [todoData, setTodoData] = useState([
    // {
    //   id: "1",
    //   title: "공부하기",
    //   completed: false,
    // },
    // {
    //   id: "2",
    //   title: "청소하기",
    //   completed: false,
    // },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할일목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />

        <Form
          value={value}
          setValue={setValue}
          handleSubmit={handleSubmit}
        ></Form>
      </div>
    </div>
  );
}
