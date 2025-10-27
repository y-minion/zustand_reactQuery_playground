import { useTodoDelete, useTodoList } from "@/store/todo";
import { Button } from "../ui/button";

function TodoItem({ todo, idx }: { todo: string; idx: number }) {
  const deleteTodo = useTodoDelete();

  return (
    <div className="flex items-center justify-between border-2 p-2">
      <span>{todo}</span>
      <Button variant={"destructive"} onClick={() => deleteTodo(idx)}>
        삭제
      </Button>
    </div>
  );
}

export default function TodoList() {
  const todoListState = useTodoList();

  return (
    <div className="flex flex-col gap-1">
      {todoListState.map((todo, idx) => (
        <TodoItem key={idx} todo={todo} idx={idx} />
      ))}
    </div>
  );
}
