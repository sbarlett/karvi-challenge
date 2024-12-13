import FavoriteCars from "@/pages/Favorites";
import Home from "@/pages/Home";
import { routes } from "@/utils/routes";
import { FormProvider, useForm } from "react-hook-form";
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  const methods = useForm({
    defaultValues: {
      filters: [],
      order: "max",
    },
  });
  return (
    <FormProvider {...methods}>
      <Routes>
        <Route path={routes.home.path} element={<Home />} />
        <Route path={routes.favorite.path} element={<FavoriteCars />} />
      </Routes>
    </FormProvider>
  );
}

export default AppRoutes;
