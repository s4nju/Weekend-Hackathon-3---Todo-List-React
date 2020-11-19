import { ListItemSecondaryAction } from '@material-ui/core';
import React, { useState } from 'react';

export default function App() {
  let [taskValue, setTaskValue] = useState("");
  let [taskList, setTaskList] = useState([]);
  let [editValue, setEditValue] = useState("");

  const handleClick = () => {
    if (taskValue.trim() === "") return;
    let taskItem = {task: taskValue, editable: false};
    let taskListCopy = [...taskList];

    taskListCopy.push(taskItem);
    setTaskList(taskListCopy);
    setTaskValue("");
  }

  const handleEdit = (index) => {
    let itemsCopy = [...taskList];
    let item = itemsCopy[index];
    setEditValue(item.task);
    item.editable = true;
  }

  const handleDelete = (index) => {
    let itemsCopy = [...taskList];
    itemsCopy.splice(index, 1)
    setTaskList(itemsCopy);
  }

  const handleSave = (index) => {
    if (editValue.trim() === '') return;

    let itemsCopy = [...taskList];
    let item = itemsCopy[index];
    item.task = editValue;
    item.editable = false;

    setTaskList(itemsCopy);
    setEditValue("");
  }

  return (
    <div id="main">
      <textarea
        id="task"
        onChange={(event) => { setTaskValue(event.target.value) }}
        value={taskValue}
      ></textarea>
      <button
        id="btn"
        onClick={handleClick}
      >Save</button>
      <ol>
        {taskList.map((item, index) => (
          <div>
            <li key={index} className="list">{item.task}</li>
              <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
              <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
              {item.editable && (<div>
                <textarea
                  // id="task"
                  className="editTask"
                  value={editValue}
                  onChange={(event) => { setEditValue(event.target.value) }}
                ></textarea>
                <button
                  // id="btn"
                  className="saveTask"
                  onClick={() => { handleSave(index) }}
                ></button>
              </div>)}
          </div>
        ))}
      </ol>
    </div>
  )
}