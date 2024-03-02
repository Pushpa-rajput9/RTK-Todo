//import { useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
//import {} from "./components/AddTodo";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className=" flex justify-center  w-full h-full items-center">
      <div className="  w-10/12 h-screen rounded-xl m-10 ">
        <div className="w-full h-28 bg-white rounded-xl ">
          <h1 className=" font-extrabold text-4xl flex justify-center ">
            {" "}
            Manage Your Redux ToolKit Todo
          </h1>
          <AddTodo />
        </div>
        <div className=" bg-slate-400 w-full h-full  rounded-xl">
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
