import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";
import { useParams } from "react-router";

export default function TodoDetailPage() {
  const { id } = useParams();
  const { data, error, isLoading } = useTodoDataById(String(id));

  if (error) return <div>패치 에러!</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <div>todo detail page number : {id}</div>
      <div>{data.content}</div>
    </div>
  );
}
