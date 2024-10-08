import { useEffect, useRef, useState } from "react";


let count = 0
const Todo = () => {

  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () =>{
    setTodos([...todos,{no:count++,text:inputRef.current.value,display:''}]);
    inputRef.current.value = ""
  }

  useEffect(() => {
    console.log(todos);
    
  },[todos])

  return (
    <div className="flex  items-center justify-center" >
      <div className="mt-20 rounded-md bg-white flex-col p-4 h-auto w-1/2
    ">
      <div className="w-1/2 m-2 text-violet-950 font-semibold size-9 font-36">To-Do List</div>
      <div className="flex justify-center align-center">
        <input ref={inputRef} type="text" placeholder="Add your task" className="rounded-full bg-[#edeef0] w-[576px] h-[50px] size-5 p-4 outline-none"/>
        <div onClick={()=>{add()}} className="text-center text-white size-6 font-semibold cursor-pointer rounded-full bg-purple-900 w-[187px] h-[50px] -ml-12">ADD</div>
      </div>

      <div>
        {todos.map((item,index) => {
          return <div><TodoItem key={index}no={item.no} display={item.display} text={item.text}></TodoItem></div>
        })}
      </div>

      </div>
    </div>
  );
};
export default Todo;
