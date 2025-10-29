import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { useCreateTodoMutation } from "@/hooks/mutations/use-create-todo-mutation";

export default function TodoEditor() {
  const [todo, setTodo] = useState("");

  const { mutate, isPending } = useCreateTodoMutation();

  const onClickHandler = () => {
    if (todo.trim() === "") return;
    mutate(todo);
    setTodo("");
  };
  return (
    <div className="flex gap-2">
      <Input
        placeholder="입력하세요..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <Button disabled={isPending} onClick={onClickHandler}>
        등록
      </Button>
    </div>
  );
}
