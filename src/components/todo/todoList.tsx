import { useTodosDate } from "@/hooks/queries/use-todos-data";
import TodoItem from "./todo-item";

export default function TodoList() {
  const { error, isLoading, data: todos } = useTodosDate();

  if (error) return <div>패치 에러!</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="flex flex-col gap-1">
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
