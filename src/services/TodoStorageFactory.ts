import { LocalTodoStorage } from "./LocalTodoStorage";
import { RemoteTodoStorage } from "./RemoteTodoStorage";
import { TodoStorageInterface } from './TodoStorageInterface';

const useRemote = import.meta.env.VITE_USE_REMOTE === "true";

export function createTodoStorage(): TodoStorageInterface {
   return useRemote ? new RemoteTodoStorage() : new LocalTodoStorage();
}
