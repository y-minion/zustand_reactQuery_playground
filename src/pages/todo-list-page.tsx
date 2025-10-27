import TodoList from "@/components/todo/todoList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTodoAdd } from "@/store/todo";
import { useState } from "react";

export default function TodoListPage() {
  const [todo, setTodo] = useState("");

  const addTodo = useTodoAdd();

  const onClickHandler = () => {
    if (todo.trim() === "") return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <div className="flex gap-2">
        <Input
          placeholder="입력하세요..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <Button onClick={onClickHandler}>등록</Button>
      </div>

      <TodoList />
    </div>
  );
}
