import { QueryClientProvider } from "@tanstack/react-query";
import "./app.css";
import { ThemeProvider } from "./features/theme/contexts/theme-provider";
import { queryClient } from "./lib/query-client";
import AppRouter from "./router";

export default function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
