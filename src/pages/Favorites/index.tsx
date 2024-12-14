import Catalog from "@/components/Catalog";
import WrapperLayout from "@/components/layout/WrapperLayout";
import { useCatalogContext } from "@/context/CatalogContext";

const FavoriteCars = () => {
  const { dataFavorites, pagination, availableFilters, toggleFavorite } =
    useCatalogContext();
  return (
    <WrapperLayout availableFilters={availableFilters}>
      <Catalog
        data={dataFavorites}
        pagination={pagination}
        onFavorite={toggleFavorite}
      />
    </WrapperLayout>
  );
};

export default FavoriteCars;
