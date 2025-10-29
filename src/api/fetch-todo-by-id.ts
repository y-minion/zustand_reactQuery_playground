import { API_URL } from "@/lib/constants";

export async function fetchTodoById(id: string) {
  const res = await fetch(`${API_URL}/todos/${id}`);
  if (!res.ok) throw new Error("id 패치 실패!");
  const data = await res.json();
  return data;
}
