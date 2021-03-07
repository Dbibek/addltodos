import { useState, useEffect } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const parsedArray = JSON.parse(localStorage.getItem("newlists"));
  const [input, setInput] = useState("");
  const [lists, setList] = useState(parsedArray !== null ? parsedArray : []);

  useEffect(() => {
    localStorage.setItem("newlists", JSON.stringify(lists));
  }, [lists]);

  console.log(lists);
  return (
    <div className="app">
      <h2 className="heading">Todo List</h2>
      <div>
        <Input
          input={input}
          setInput={setInput}
          lists={lists}
          setList={setList}
        />
      </div>
      <TodoList lists={lists} setList={setList} />
    </div>
  );
}

export default App;
