import React from "react";

const Input = ({ input, setInput, lists, setList }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (input !== "") {
      const todolists = {
        id: Math.floor(Math.random() * 1000),
        value: input,
        completed: false,
      };
      setList([...lists, todolists]);
    }
    setInput("");
  };

  return (
    <form onSubmit={handleClick}>
      <input
        type="text"
        placeholder="add your todos here"
        value={input}
        required
        onChange={handleChange}
      />
      <button className="btn-add" type="submit">
        +
      </button>
    </form>
  );
};

export default Input;
