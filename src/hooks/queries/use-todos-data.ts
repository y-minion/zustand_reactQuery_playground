import { fetchTodos } from "@/api/fetch-todos";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useTodosDate() {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: QUERY_KEYS.todo.list,
    queryFn: async () => {
      const todos = await fetchTodos();

      todos.forEach((todo) => {
        queryClient.setQueryData<Todo>(QUERY_KEYS.todo.detail(todo.id), todo);
      });

      return todos.map(({ id }) => id);
    },
    retry: 0,
  });
}
