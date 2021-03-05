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
            <h3 className={list.completed ? "complete" : "notcomplete"}>
              {list.value}
            </h3>
            <div className="buttondiv">
              <button className="btn-del" onClick={() => handleDelete(list)}>
                X
              </button>
              <button onClick={() => handleComplete(list)}>✓</button>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
