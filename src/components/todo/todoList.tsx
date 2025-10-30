import { useTodosData } from "@/hooks/queries/use-todos-data";
import TodoItem from "./todo-item";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";

export default function TodoList() {
  const { error, isLoading, data: todoIdArr } = useTodosData();

  if (error) return <div>패치 에러!</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="flex flex-col gap-1">
      {todoIdArr?.map((id) => (
        <TodoItem key={id} id={id} />
      ))}
    </div>
  );
}
