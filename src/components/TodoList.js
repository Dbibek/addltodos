import React from "react";

const TodoList = ({ lists, setList }) => {
  const handleDelete = ({ id }) => {
    setList(lists.filter((list) => list.id !== id));
  };
  const handleComplete = (list) => {
    setList(
      lists.map((item) => {
        if (item.id === list.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div className="todos">
      {lists.map((list) => (
        <li key={list.id}>
          <div className="todo">
            <h3> {list.value}</h3>
            <button className="btn-del" onClick={() => handleDelete(list)}>
              Del
            </button>
            <button
              className={list.completed ? "btn-complete" : "btn-notcomplete"}
              onClick={() => handleComplete(list)}
            >
              complete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
