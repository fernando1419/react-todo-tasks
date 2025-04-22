import { useEffect, useState } from "react";
import { fetchTodos, initialData, saveTodos } from "./api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Spinner from "./components/shared/Spinner";
import Todos from "./components/Todos";
import { FILTER_TYPES } from "./consts";
import { type TODO } from "./types";

function App() {
  const [todos, setTodos] = useState<TODO[]>([]);
  const [filterSelected, setFilterSelected] = useState<FILTER_TYPES>(FILTER_TYPES.ALL);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTodos()
      .then((todos) => {
        setTodos(todos);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleDeleteTodo = async (id: number): Promise<void> => {
    // console.log({ id });
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    await saveTodos(newTodos);
  };

  const handleCompleted = async ({ id, isCompleted }: Pick<TODO, "id" | "isCompleted">): Promise<void> => {
    // console.log({ id, isCompleted });
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted };
      }
      return todo;
    });
    setTodos(newTodos);
    await saveTodos(newTodos);
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

  const handleClearAllCompleted = async (): Promise<void> => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    // console.log({ newTodos });
    setTodos(newTodos);
    await saveTodos(newTodos);
  };

  const handleAddTodo = async (title: string): Promise<void> => {
    const newTodo = { id: Date.now(), title, isCompleted: false };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    await saveTodos(updatedTodos);
  };

  const handleImportDummyData = async (): Promise<void> => {
    setTodos(initialData);
    await saveTodos(initialData);
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
