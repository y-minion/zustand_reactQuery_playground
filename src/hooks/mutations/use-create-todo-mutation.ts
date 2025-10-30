import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo, TodoList } from "@/types";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export function useCreateTodoMutation() {
  //   const queryClient = new QueryClient(); -> ❗️새로운 쿼리클라이언트를 만들면 안된다!!
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {},
    onSettled: () => {},
    onError: (error) => {
      window.alert(error.message);
    },
    onSuccess: (newTodo) => {
      queryClient.setQueryData<Todo>(
        QUERY_KEYS.todo.detail(newTodo.id),
        newTodo,
      );
      queryClient.setQueryData<string[]>(QUERY_KEYS.todo.list, (prevData) => {
        if (!prevData) return [newTodo.id];
        return [...prevData, newTodo.id];
      });
    },
  });
}
