import React from "react";
import Todo from "./Todo";

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
      {lists.length === 0 ? (
        <h2>No thing to do!!!</h2>
      ) : (
        <Todo
          lists={lists}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      )}
    </div>
  );
};

export default TodoList;
