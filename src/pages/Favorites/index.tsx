import Catalog from "@/components/Catalog";
import WrapperLayout from "@/components/layout/WrapperLayout";
import useCatalog from "@/hook/useCatalog";
import { useForm } from "react-hook-form";

const FavoriteCars = () => {
  const methods = useForm({
    defaultValues: {
      filters: [],
      order: "relevant",
    },
  });

  const { watch } = methods;

  const filters = watch("filters");
  const order = watch("order");

  const { data, pagination, availableFilters, toggleFavorite } = useCatalog(
    filters,
    order
  );

  const catalogFavorite = data.filter((car) => car.fav === true);

  return (
    <WrapperLayout availableFilters={availableFilters}>
      <Catalog
        data={catalogFavorite}
        pagination={pagination}
        onFavorite={toggleFavorite}
        hiddenFavoritePage={false}
      />
    </WrapperLayout>
  );
};

export default FavoriteCars;
