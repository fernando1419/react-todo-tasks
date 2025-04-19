/* eslint-disable no-unused-vars */
import { type TODO } from "../types";
import Todo from "./Todo";

interface TodosProps {
  todos: TODO[];
  onRemoveTodo: (id: number) => void;
  onToggleCompleteTodo: ({
    id,
    isCompleted,
  }: Pick<TODO, "id" | "isCompleted">) => void;
}

export default function Todos({
  todos,
  onRemoveTodo,
  onToggleCompleteTodo,
}: TodosProps) {
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
            onToggleCompleteTodo={onToggleCompleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}
