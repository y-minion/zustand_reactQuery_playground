import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { TodoList } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    onError: () => {},
    onSuccess: (prevData) => {},
    onMutate: (updatedTodo) => {
      queryClient.setQueryData<TodoList>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.map((prevTodo) => {
          if (prevTodo.id !== updatedTodo.id) return prevTodo;
          return {
            ...prevTodo,
            ...updatedTodo,
          };
        });
      });
    },
  });
}
