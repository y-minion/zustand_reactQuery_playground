import { useTodoDelete } from "@/store/todo";
import type { Todo } from "@/types";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";

export default function TodoItem({ content, id, isDone }: Todo) {
  const { mutate } = useUpdateTodoMutation();
  const handleDeleteCLick = () => {};
  const handleCheckboxClick = () => {
    mutate({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border-2 p-2">
      <div className="flex gap-5">
        <input type="checkbox" checked={isDone} onClick={handleCheckboxClick} />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button variant={"destructive"} onClick={handleDeleteCLick}>
        삭제
      </Button>
    </div>
  );
}
