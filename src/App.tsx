import { createTheme, ThemeProvider } from "@mui/material";
import AppRoutes from "./components/AppRoutes";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
