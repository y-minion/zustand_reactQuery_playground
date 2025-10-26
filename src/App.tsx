import "./App.css";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";

function App() {
  const isActive = false;
  return (
    <div>
      <div className={cn(isActive ? "text-green-400" : "text-red-600")}>
        isActive
      </div>
      <Button>버튼!</Button>
      <div className="text-primary">Primary</div>
      <div className="text-muted">Muted</div>
      <div className="text-destructive">Destructive</div>
    </div>
  );
}

export default App;
