import { TODO } from "../types";
import { TodoStorageInterface } from "./TodoStorageInterface";

export class LocalTodoStorage implements TodoStorageInterface {
   async fetchTodos(): Promise<TODO[]> {
      const local = localStorage.getItem("todos");

      return local ? JSON.parse(local) : [];
   }

   async saveTodos(todos: TODO[]): Promise<void> {
      localStorage.setItem("todos", JSON.stringify(todos));
   }
}
