import { deleteTodo } from "@/api/delete-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo, TodoList } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,

    onSuccess: (deletedTodo) => {
      //총 2곳의 캐시 데이터를 수정해 줘야한다.
      queryClient.removeQueries({
        queryKey: QUERY_KEYS.todo.detail(deletedTodo.id),
      }); // 디테일 toDo 캐시 데이터 수정

      queryClient.setQueryData<string[]>(QUERY_KEYS.todo.list, (prevData) => {
        if (!prevData) return [];
        return prevData.filter((id) => id !== deletedTodo.id);
      }); // todo Id들이 모여있는 배열 캐시 수정
    },
  });
}
