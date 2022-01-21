import axios from "axios";
import type { Todo } from "../types";

export const API = {
    getTodo: async (id: number) => {
        return await axios.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }
}