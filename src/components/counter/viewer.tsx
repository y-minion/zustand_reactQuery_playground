import { useCountStore } from "@/store/count";

export default function Viewer() {
  const { count } = useCountStore();

  return <div>current Count : {count}</div>;
}
