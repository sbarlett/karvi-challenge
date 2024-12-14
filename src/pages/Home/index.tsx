import Catalog from "@/components/Catalog";
import WrapperLayout from "@/components/layout/WrapperLayout";
import { useCatalogContext } from "@/context/CatalogContext";

const Home = () => {
  const { data, pagination, availableFilters, toggleFavorite } =
    useCatalogContext();
  return (
    <WrapperLayout availableFilters={availableFilters} totalCars={pagination.totalItems}>
      <Catalog
        data={data}
        pagination={pagination}
        onFavorite={toggleFavorite}
      />
    </WrapperLayout>
  );
};

export default Home;
