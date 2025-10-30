import { deleteTodo } from "@/api/delete-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { TodoList } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,

    onSuccess: (deletedTodo) => {
      queryClient.setQueryData<TodoList>(QUERY_KEYS.todo.list, (prevData) => {
        if (!prevData) return [];
        return prevData?.filter((todo) => todo.id !== deletedTodo.id);
      });
    },
  });
}
