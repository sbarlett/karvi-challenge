import Aside from "@/components/Aside/Aside";
import Catalog from "@/components/Catalog/Catalog";
import FilterState from "@/components/FilterState/FilterState";
import { Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

const Home = () => {
  const methods = useForm({
    defaultValues: {
      filters: [],
    },
  });
  return (
    <Box sx={{ display: "flex", padding: "60px 42px 30px 37px" }}>
      <FormProvider {...methods}>
        <Box sx={{ display: "flex", gap: "30px", width: "100%" }}>
          <Aside />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
            }}
          >
            <FilterState />
            <Catalog />
          </Box>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default Home;
