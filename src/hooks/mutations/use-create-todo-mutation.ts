import { createTodo } from "@/api/create-todo";
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
    onSuccess: () => {
      //   window.location.reload();
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}
