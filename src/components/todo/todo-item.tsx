import { useTodoDelete } from "@/store/todo";
import type { Todo } from "@/types";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";
import { Spinner } from "../ui/spinner";

export default function TodoItem({ content, id, isDone }: Todo) {
  const { mutate: updateTodo } = useUpdateTodoMutation();
  const { mutate: deleteMutate, isPending: isDeleteTodoPending } =
    useDeleteTodoMutation();
  const handleDeleteCLick = () => {
    deleteMutate({ id });
  };
  const handleCheckboxClick = () => {
    updateTodo({
      id,
      isDone: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between border-2 p-2">
      <div className="flex items-center gap-5">
        {isDeleteTodoPending ? (
          <Spinner />
        ) : (
          <input
            type="checkbox"
            checked={isDone}
            onClick={handleCheckboxClick}
            disabled={isDeleteTodoPending}
          />
        )}

        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button
        variant={"destructive"}
        onClick={handleDeleteCLick}
        disabled={isDeleteTodoPending}
      >
        삭제
      </Button>
    </div>
  );
}
