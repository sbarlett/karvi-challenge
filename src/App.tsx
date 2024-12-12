import { createTheme, ThemeProvider } from "@mui/material";
import AppRoutes from "./components/AppRoutes";
import QueryClientProvider from "./providers/QueryClientProvider";

const theme = createTheme();

function App() {
  return (
    <QueryClientProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
