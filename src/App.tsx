import { useState } from "react";
import Todos from "./components/Todos";
import { type TODO } from "./types";

const fakeTodos: TODO[] = [
  { id: 1, title: "task1 description", isCompleted: true },
  { id: 2, title: "task2 description", isCompleted: false },
  { id: 3, title: "task3 description", isCompleted: false },
  { id: 4, title: "task4 description", isCompleted: false },
];

function App() {
  const [todos, setTodos] = useState(fakeTodos);

  const handleDeleteTodo = (id: number) => {
    console.log({ id });
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos todos={todos} onRemoveTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
