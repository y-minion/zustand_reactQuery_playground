import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { TodoList } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,

    onMutate: async (updatedTodo) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.todo.list });
      const prevTodos = queryClient.getQueryData<TodoList>(
        QUERY_KEYS.todo.list,
      );
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

      return { prevTodos };
    },
    onError: (error, variable, context) => {
      if (context && context.prevTodos) {
        queryClient.setQueryData<TodoList>(
          QUERY_KEYS.todo.list,
          context.prevTodos,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todo.list,
      });
    },
  });
}
