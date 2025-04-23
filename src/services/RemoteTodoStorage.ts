import { TODO } from "../types";
import { TodoStorageInterface } from './TodoStorageInterface';

const BASE_URL = import.meta.env.VITE_JSONBIN_BASE_URL;
const API_ACCESS_KEY = import.meta.env.VITE_JSONBIN_ACCESS_KEY;
const BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID;
// console.log({ BASE_URL, API_KEY, BIN_ID });

export class RemoteTodoStorage implements TodoStorageInterface {
   async fetchTodos(): Promise<TODO[]> {
      try {
         const response = await fetch(`${BASE_URL}/${BIN_ID}`, {
            method: 'GET',
            headers: { "X-Access-Key": API_ACCESS_KEY }
         });
         const json = await response.json();
         const { record: { data } }: { record: { data: TODO[]; }; } = json;
         return data;
      } catch (error) {
         console.log(error);
         throw new Error("Error when fetching data");
      }
   }

   async saveTodos(updatedTodos: TODO[]): Promise<void> {
      try {
         await fetch(`${BASE_URL}/${BIN_ID}`, {
            method: 'PUT',
            headers: {
               "X-Access-Key": API_ACCESS_KEY,
               "Content-Type": "application/json"
            },
            body: JSON.stringify({ data: updatedTodos })
         });
      } catch (error) {
         console.log(error);
         throw new Error("Error in saveTodos() when updating data..");
      }
   }
}
