import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  return(
    <div>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button
        onClick={()=> {
          setTodos([...todos, newTodo]);
          setNewTodo("");
        }}>
          追加
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li>
            {todo}
              <button
              onClick={ ()=> 
                setTodos(todos.filter((_, index2) => index2 !== index))
              }>
                削除
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
