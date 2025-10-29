import { fetchTodos } from "@/api/fetch-todos";
import { QUERY_KEYS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useTodosDate() {
  return useQuery({
    queryKey: QUERY_KEYS.todo.list,
    queryFn: fetchTodos,
    retry: 0,
  });
}
