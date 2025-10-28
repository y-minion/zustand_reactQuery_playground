import { useTodoDelete, useTodoList } from "@/store/todo";
import { Button } from "../ui/button";
import { useTodosDate } from "@/hooks/queries/use-todos-data";
import { Link } from "react-router";

function TodoItem({ todo, id }: { todo: string; id: number }) {
  const deleteTodo = useTodoDelete();

  return (
    <div className="flex items-center justify-between border-2 p-2">
      <Link to={`/todolist/${id}`}>{todo}</Link>
      <Button variant={"destructive"} onClick={() => deleteTodo(id)}>
        삭제
      </Button>
    </div>
  );
}

export default function TodoList() {
  const { error, isLoading, data: todos } = useTodosDate();

  if (error) return <div>패치 에러!</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="flex flex-col gap-1">
      {todos?.map(({ content, id }) => (
        <TodoItem key={id} todo={content} id={id} />
      ))}
    </div>
  );
}
