import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/count";

export default function CounterPage() {
  const { count, increase, decrease } = useCountStore();
  return (
    <div>
      <h1 className="text-2xl font-bold">Counter Page</h1>;
      <main>
        <div>current Count : {count}</div>
        <Button onClick={() => increase()}>increase</Button>
        <Button onClick={() => decrease()}>decrease</Button>
      </main>
    </div>
  );
}
