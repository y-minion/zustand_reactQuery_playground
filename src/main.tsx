import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      gcTime: 5 * 60 * 1000,
      refetchInterval: false,
      refetchOnWindowFocus: false, // 다른 창 이동했다가 해당 창에 포커스시 리패치
      refetchOnReconnect: false, //인터넷 연결 유무에 따른 리패치
      refetchOnMount: true, //최초 마운트 이후 해당 컴포넌트가 마운트시 리패치 유무 옵션 설정
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);
