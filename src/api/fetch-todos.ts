import { API_URL } from "@/lib/constants";
import type { TodoList } from "@/types";

export async function fetchTodos() {
  const reponse = await fetch(`${API_URL}/todos`);
  if (!reponse.ok) throw new Error("todo데이터 패치 실패");
  const data: TodoList = await reponse.json();
  return data;
}
