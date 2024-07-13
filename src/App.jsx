import AddTodoForm from "./assets/components/AddTodoForm";
import TodoList from "./assets/components/TodoList";

function App() {
  return (
    <>
  <div className="sm:w-[55%] md:w-[20%] h-[60vh] border mx-auto px-5 py-3 mt-[10%] bg-[#478CCF] text-[#11301d] overflow-y-auto rounded-xl hover:translate-y-3 transition-all duration-500 hover:shadow-lg hover:shadow-[#0E46A3]" >
    <h1 className="text-center font-bold font-mono text-4xl capitalize hover:drop-shadow-xl ">todo-app📋</h1>
    <AddTodoForm/>
    <TodoList/>
  </div>
    </>
  );
}

export default App;
