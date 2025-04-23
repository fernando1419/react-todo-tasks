import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Spinner from "./components/shared/Spinner";
import Todos from "./components/Todos";
import { FILTER_TYPES } from "./consts";
import { initialData } from "./data/fakeData";
import { createTodoStorage } from "./services/TodoStorageFactory";
import { type TODO } from "./types";

const todoStorage = createTodoStorage();

function App() {
  const [todos, setTodos] = useState<TODO[]>([]);
  const [filterSelected, setFilterSelected] = useState<FILTER_TYPES>(FILTER_TYPES.ALL);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    todoStorage
      .fetchTodos()
      .then((todos) => {
        setTodos(todos);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDeleteTodo = (id: number): void => {
    // console.log({ id });
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    todoStorage.saveTodos(newTodos);
  };

  const handleCompleted = ({ id, isCompleted }: Pick<TODO, "id" | "isCompleted">): void => {
    // console.log({ id, isCompleted });
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
    todoStorage.saveTodos(newTodos);
  };

  const handleFilterChange = (filter: FILTER_TYPES): void => {
    setFilterSelected(filter);
  };

  const filterTodos: TODO[] = todos.filter((todo) => {
    if (filterSelected === FILTER_TYPES.ACTIVE) return !todo.isCompleted;
    if (filterSelected === FILTER_TYPES.COMPLETED) return todo.isCompleted;
    return todo;
  });

  const activeCount = todos.filter((todo) => !todo.isCompleted).length;
  const completedCount = todos.length - activeCount;

  const handleClearAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    // console.log({ newTodos });
    setTodos(newTodos);
    todoStorage.saveTodos(newTodos);
  };

  const handleAddTodo = (title: string): void => {
    const newTodo = { id: Date.now(), title, isCompleted: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    todoStorage.saveTodos(updatedTodos);
  };

  const handleImportDummyData = (): void => {
    setTodos(initialData);
    todoStorage.saveTodos(initialData);
  };

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Todos todos={filterTodos} onRemoveTodo={handleDeleteTodo} onToggleCompleteTodo={handleCompleted} />
          <Footer
            activeCount={activeCount}
            completedCount={completedCount}
            todosCount={todos.length}
            filterSelected={filterSelected}
            handleFilterChange={handleFilterChange}
            onClearCompleted={handleClearAllCompleted}
            onCreateDummyData={handleImportDummyData}
          />
        </>
      )}
    </div>
  );
}

export default App;
