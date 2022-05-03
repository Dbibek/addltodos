import React from "react";

const Todo = ({ lists, handleComplete, handleDelete }) => {
  return (
    <>
      {lists.map((list) => (
        <li key={list.id}>
          <div className="todo">
            <h4 className={list.completed ? "complete" : "notcomplete"}>
              {list.value}
            </h4>

            <div className="buttondiv">
              <i
                className="fa fa-trash"
                title="Delete"
                onClick={() => handleDelete(list)}
              />
              <input
                className="checked"
                type="checkbox"
                onClick={() => handleComplete(list)}
              />
            </div>
          </div>
        </li>
      ))}
      <h2>
        {" "}
        {lists.length < 2
          ? `you have ${lists.length} thing to do`
          : `you have ${lists.length} things to do`}
      </h2>
    </>
  );
};

export default Todo;
