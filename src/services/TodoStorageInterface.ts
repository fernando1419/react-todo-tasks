import { TODO } from "../types";

export interface TodoStorageInterface {
   fetchTodos(): Promise<TODO[]>;
   // eslint-disable-next-line no-unused-vars
   saveTodos(todos: TODO[]): Promise<void>;
}
