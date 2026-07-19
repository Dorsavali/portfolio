import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/query/queryClient";
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);


