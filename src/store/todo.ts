import type { TodoActions, TodoState, TodoStore } from "@/types";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initialState = { todo: "", todoList: [] };

const useTodoStore = create<TodoStore>()(
  devtools(
    immer(
      combine<TodoState, { actions: TodoActions }>(initialState, (set) => ({
        actions: {
          addTodo(content) {
            set((state) => {
              state.todoList.push(content);
            });
          },
          deleteTodo(idx) {
            set((state) => {
              state.todoList.splice(idx, 1);
            });
          },
        },
      })),
    ),
    {
      name: "todoStore",
    },
  ),
);

export const useTodoList = () => useTodoStore((store) => store.todoList);

export const useTodoAdd = () => useTodoStore((store) => store.actions.addTodo);

export const useTodoDelete = () =>
  useTodoStore((store) => store.actions.deleteTodo);
