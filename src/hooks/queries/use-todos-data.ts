import { fetchTodos } from "@/api/fetch-todos";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useTodosData() {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: QUERY_KEYS.todo.list,
    queryFn: async () => {
      const todos = await fetchTodos();

      //미리 디테일 투두 캐시 업데이트
      todos.forEach((todo) => {
        queryClient.setQueryData<Todo>(QUERY_KEYS.todo.detail(todo.id), todo);
      });

      //id배열만 반환 -> 데이터 평탄화
      return todos.map(({ id }) => id);
    },
    retry: 0,
  });
}
