import { type TODO } from "../types";
import Todo from "./Todo";

export default function Todos({ todos }: { todos: TODO[] }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.isCompleted ? "completed" : ""}>
          <Todo
            key={todo.id}
            title={todo.title}
            id={todo.id}
            isCompleted={todo.isCompleted}
          />
        </li>
      ))}
    </ul>
  );
}
