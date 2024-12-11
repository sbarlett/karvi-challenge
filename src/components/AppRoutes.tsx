import { Route, Routes } from "react-router-dom";
import { routes } from "@/utils/routes";
import Home from "@/pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.home.path} element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
