import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { FILTER_TYPES } from "./consts";
import { type TODO } from "./types";

const fakeTodos: TODO[] = [
  { id: 1, title: "task1 description", isCompleted: true },
  { id: 2, title: "task2 description", isCompleted: false },
  { id: 3, title: "task3 description", isCompleted: false },
  { id: 4, title: "task4 description", isCompleted: true },
];

function App() {
  const [todos, setTodos] = useState(fakeTodos);
  const [filterSelected, setFilterSelected] = useState<FILTER_TYPES>(FILTER_TYPES.ALL);

  const handleDeleteTodo = (id: number) => {
    console.log({ id });
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({ id, isCompleted }: Pick<TODO, "id" | "isCompleted">): void => {
    console.log({ id, isCompleted });
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: FILTER_TYPES): void => {
    setFilterSelected(filter);
  };

  const filterTodos = todos.filter((todo) => {
    if (filterSelected === FILTER_TYPES.ACTIVE) return !todo.isCompleted;
    if (filterSelected === FILTER_TYPES.COMPLETED) return todo.isCompleted;
    return todo;
  });

  const activeCount = todos.filter((todo) => !todo.isCompleted).length;
  const completedCount = todos.length - activeCount;

  const handleClearAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(newTodos);
  };

  const handleAddTodo = (title: string): void => {
    const newTodo = { id: Date.now(), title, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos todos={filterTodos} onRemoveTodo={handleDeleteTodo} onToggleCompleteTodo={handleCompleted} />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleClearAllCompleted}
      />
    </div>
  );
}

export default App;
