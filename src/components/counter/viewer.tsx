import { useCount } from "@/store/count";

export default function Viewer() {
  const count = useCount();

  return <div>current Count : {count}</div>;
}
