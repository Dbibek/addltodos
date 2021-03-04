import { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [lists, setList] = useState([]);

  console.log(lists);
  return (
    <div className="App">
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
