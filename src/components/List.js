import React from "react";

function List({
  id,
  title,
  completed,
  todoData,
  setTodoData,
  provided,
  snapshot,
}) {
  const handleXClick = (id) => {
    let newTodoData = todoData.filter((x) => x.id !== id);
    //console.log("newTodoData", newTodoData);
    setTodoData(newTodoData);
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <div
      key={id}
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      className={`${
        snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
      } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
    >
      <div className="items-center">
        <input
          type="checkbox"
          defaultChecked={false}
          onChange={() => handleCompleteChange(id)}
        />
        <span className={completed ? "line-through" : ""}>{title}</span>
      </div>
      <div className="items-center">
        <button
          className="px-4 py-2 float-right"
          onClick={() => handleXClick(id)}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default List;
