import { fetchTodos } from "@/api/fetch-todos";
import { useQuery } from "@tanstack/react-query";

export function useTodosDate() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    retry: 0,
  });
}
