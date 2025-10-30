import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export async function deleteTodo({ id }: { id: string }) {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("failed delete todo!");

  const data: Todo = await res.json();
  return data;
}
