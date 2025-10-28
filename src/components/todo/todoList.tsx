import { useTodoDelete, useTodoList } from "@/store/todo";
import { Button } from "../ui/button";

function TodoItem({ todo, id }: { todo: string; id: number }) {
  const deleteTodo = useTodoDelete();

  return (
    <div className="flex items-center justify-between border-2 p-2">
      <span>{todo}</span>
      <Button variant={"destructive"} onClick={() => deleteTodo(id)}>
        삭제
      </Button>
    </div>
  );
}

export default function TodoList() {
  const todoListState = useTodoList();

  return (
    <div className="flex flex-col gap-1">
      {todoListState.map(({ content, id }) => (
        <TodoItem key={id} todo={content} id={id} />
      ))}
    </div>
  );
}
