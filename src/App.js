import { useState,useRef  } from "react";
import TodoList  from "./TodoList";
function App() {
  const[todos] = useState([
    {id:1,name:'Todo1',completed:false,},
  ]);
  const  todoNameRef = useRef();
  const AddTask = () => {
    console.log(todoNameRef.current.value)
  }
  return (
    <>
    <TodoList todos={todos}/>
    <input type='text' ref={todoNameRef}></input>
    <button onClick={AddTask}>タスクの追加</button>
    <button>タスクの削除</button>
    <div>残りのタスク:0</div>
    </>
  );
}

export default App;