import useTodoStore from "./TodoStore";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <>
      <ul className="mt-5 border rounded-lg px-3  hover:shadow-lg hover:shadow-[#373b3b] transition-all duration-500 bg-slate-100 ">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
