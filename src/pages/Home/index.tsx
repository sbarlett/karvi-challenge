import Catalog from "@/components/Catalog";
import WrapperLayout from "@/components/layout/WrapperLayout";
import useCatalog from "@/hook/useCatalog";
import { useFormContext } from "react-hook-form";

const Home = () => {
  const { watch } = useFormContext();

  const filters = watch("filters");
  const order = watch("order");

  const { data, pagination, availableFilters, toggleFavorite } = useCatalog(
    filters,
    order
  );

  return (
    <WrapperLayout availableFilters={availableFilters}>
      <Catalog
        data={data}
        pagination={pagination}
        onFavorite={toggleFavorite}
      />
    </WrapperLayout>
  );
};

export default Home;
