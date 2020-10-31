import React, { useRef } from "react";
import "./../styles/App.css";
import Task from "./Task";

function App() {
  let [tempTask, setTempTask] = React.useState("");
  let [tasks, setTasks] = React.useState([]);
  let taskId = useRef(0);

  function handleSubmit(event) {
    event.preventDefault();
    let tasksCopy = [...tasks];
    tasksCopy.push({ id: taskId.current, task: tempTask, editable: false });
    setTasks(tasksCopy);
    console.log(tempTask, tasks);
    taskId.current = taskId.current + 1;
  }

  function handleDelete(id) {
    let tasksCopy = [...tasks];
    tasksCopy = tasksCopy.filter((t) => t.id !== id);
    setTasks(tasksCopy);
  }

  function handleEdit(id, text) {
    console.log(id, text);
    let tasksCopy = [...tasks];
    for (let t of tasks) {
      if (t.id === id) {
        t.editable = false;
        t.task = text;
      }
    }
    console.log(tasksCopy);
    setTasks(tasksCopy);
  }

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <textarea
          id="task"
          onChange={(event) => setTempTask(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.task}
          editable={task.editable}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default App;
