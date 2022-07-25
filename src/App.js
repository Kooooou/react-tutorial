import { useState  } from "react";
import TodoList  from "./TodoList";
function App() {
  const todos = useState(['Todo1','Todo2']);
  return (
    <div>
    <h1><TodoList todos={todos}/></h1>
    <input type='text'></input>
    <button>タスクの追加</button>
    <button>タスクの削除</button>
    <div>残りのタスク:0</div>
    </div>
  );
}

export default App;