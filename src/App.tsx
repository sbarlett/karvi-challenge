import AppRoutes from "./components/AppRoutes";
import QueryClientProvider from "./providers/QueryClientProvider";

function App() {
  return (
    <QueryClientProvider>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
