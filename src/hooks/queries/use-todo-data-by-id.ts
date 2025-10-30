import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { QUERY_KEYS } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id: string, type: "LIST" | "DETAIL") {
  return useQuery({
    queryKey: QUERY_KEYS.todo.detail(id),
    queryFn: () => fetchTodoById(id),
    enabled: type === "DETAIL",
    staleTime: 1000,
    gcTime: 1000,

    /*
    refetchInterval: 1, //리패치 주기를 설정
    refetchOnWindowFocus: true, // 다른 창 이동했다가 해당 창에 포커스시 리패치
    refetchOnReconnect: false, //인터넷 연결 유무에 따른 리패치
    refetchOnMount: false, //최초 마운트 이후 해당 컴포넌트가 마운트시 리패치 유무 옵션 설정
    */
  });
}
