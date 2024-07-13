import  { useState } from "react";
import useTodoStore from "./TodoStore";

const AddTodoForm = () => {
  const [text, setText] = useState();
  const addTodo = useTodoStore((state) => state.addTodo);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text.trim()) return;
    addTodo(text);
    setText('')
  };
  return (
    <>
    
      <form onSubmit={handleSubmit} className="flex mt-4 ">
        {/* user-input */}
        <input type="text"   
        placeholder="note your daily task"
  className=" font-bold text-lg text-white  mr-2 input input-bordered input-info w-full max-w-xs placeholder:font-mono placeholder:font-bold bg-[#344C64]"
        value={text} onChange={ (e) => setText(e.target.value)} />
        {/* user-submit-button */}
        <button type="submit" className="btn btn-success"> submit</button>
        
      </form>
    </>
  );
};

export default AddTodoForm;
