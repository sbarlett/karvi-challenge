import Aside from "@/components/Aside/Aside";
import Catalog from "@/components/Catalog/Catalog";
import FilterState from "@/components/FilterState/FilterState";
import useCatalog from "@/hook/useCatalog";
import { Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

const Home = () => {
  const methods = useForm({
    defaultValues: {
      filters: [],
      order: "relevant",
    },
  });

  const { watch } = methods;

  const filters = watch("filters");
  const order = watch("order");

  const { data, pagination, availableFilters } = useCatalog(filters, order);

  return (
    <Box
      sx={{
        display: "flex",
        padding: "60px 42px 30px 37px",
        "@media (max-width: 650px)": {
          padding: "20px",
        },
      }}
    >
      <FormProvider {...methods}>
        <Box sx={{ display: "flex", gap: "30px", width: "100%" }}>
          <Aside filters={availableFilters} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
            }}
          >
            <FilterState />
            <Catalog data={data} pagination={pagination} />
          </Box>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default Home;
