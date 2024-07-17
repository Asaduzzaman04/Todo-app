import useTodoStore from "./TodoStore";

const TodoItem = ({todo}) => {
  const { removeTodo, ToggleTodo } = useTodoStore();
  return (
    <>
      <li className="flex justify-around items-center  my-2 ">
        {/* imput-checkboox */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => ToggleTodo(todo.id)}
          className="checkbox checkbox-success"
        />

        {/* task-output */}

        <p className={ `flex-1 overflow-hidden mx-4 font-mono font-bold text-xl capitalize  text-center  ${todo.completed ? "line-through" : ""} `}>{todo.text}</p>

        {/* remove-todo-buttom */}
        <button onClick={() => removeTodo(todo.id)} className=" font-mono font-extrabold capitalize px-1.5 py-1 border-red-500  border-[2px] rounded-md hover:bg-red-500 hover:text-white transition-all duration-300">delete</button>
      </li>
    </> 
  );
};

export default TodoItem;
