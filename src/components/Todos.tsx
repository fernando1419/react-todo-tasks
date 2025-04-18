import { type TODO } from "../types";
import Todo from "./Todo";

interface TodosProps {
  todos: TODO[];
  // eslint-disable-next-line no-unused-vars
  onRemoveTodo: (id: number) => void;
}

export default function Todos({ todos, onRemoveTodo }: TodosProps) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.isCompleted ? "completed" : ""}>
          <Todo
            key={todo.id}
            title={todo.title}
            id={todo.id}
            isCompleted={todo.isCompleted}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  );
}
