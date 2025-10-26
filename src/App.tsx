import { toast } from "sonner";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/sonner";
import { Textarea } from "./components/ui/textarea";
import { cn } from "./lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";
import { IdCard } from "lucide-react";

function App() {
  const isActive = false;
  return (
    <div className="flex flex-col gap-2 p-5">
      <Toaster />
      <IdCard className="h-10 w-10" />
      <AlertDialog>
        <AlertDialogTrigger>Open Alert Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Title</AlertDialogTitle>
          <AlertDialogDescription>Description</AlertDialogDescription>
          <div>Body</div>
          <div>
            <AlertDialogCancel onClick={() => console.log("취소")}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => console.log("성공")}>
              Action
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>타이틀</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <div>Body</div>
        </DialogContent>
      </Dialog>
      <Popover>
        <PopoverTrigger asChild>
          <Button>OPEN</Button>
        </PopoverTrigger>
        <PopoverContent>하윙</PopoverContent>
      </Popover>

      <Carousel className="mx-10">
        <CarouselContent>
          <CarouselItem className="basis-1/3">1</CarouselItem>
          <CarouselItem className="basis-1/3">2</CarouselItem>
          <CarouselItem className="basis-1/3">3</CarouselItem>
          <CarouselItem className="basis-1/3">4</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Button
        onClick={() =>
          toast.promise<{ name: string }>(
            () =>
              new Promise((resolve) =>
                setTimeout(() => {
                  return resolve({ name: "이벤트" });
                }, 2000),
              ),
            {
              loading: "로딩중...",
              success: (data) => `${data.name}이 성공적으로 생성되었습니다.`,
              error: "실패!",
              position: "top-right",
            },
          )
        }
      >
        Promise 버튼
      </Button>

      <Textarea placeholder="찍찎...!" />

      <Input placeholder="입력 ..." />

      <Button variant="outline">버튼</Button>
      <Button variant="secondary">버튼</Button>
      <Button variant="ghost">버튼</Button>
      <Button variant="destructive">버튼</Button>
      <Button variant="link">버튼</Button>
      <Button>버튼</Button>

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
