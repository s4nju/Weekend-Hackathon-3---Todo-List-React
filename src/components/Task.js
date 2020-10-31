import React from "react";

export default function Task(props) {
  let { id, text, editable, handleDelete, handleEdit } = props;
  let [edit, setEdit] = React.useState(editable);
  let [editTask, setEditTask] = React.useState(text);

  function onEdit() {
    setEdit(!edit);
  }

  return (
    <div className="list">
      <input
        onChange={(event) => setEditTask(event.target.value)}
        disabled={!edit}
        value={editTask.toString()}
      />
      <button onClick={() => handleDelete(id)}>Del</button>
      {!edit ? <button onClick={() => onEdit()}>Edit</button> : null}
      {edit ? (
        <button
          onClick={() => {
            setEdit(!edit);
            handleEdit(id, editTask);
          }}
        >
          Done
        </button>
      ) : null}
    </div>
  );
}
