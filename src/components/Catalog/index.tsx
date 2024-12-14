import { CatalogCars, PaginationType } from "@/models";
import { Fragment } from "react";
import CardItem from "../CardItem";
import Pagination from "../Pagination";
import { CatalogContainer, GridContainer, MuiDivider } from "./styles";
import { useLocation } from "react-router-dom";
import { routes } from "@/utils/routes";

const Catalog = ({
  data,
  pagination,
  onFavorite,
}: {
  data: CatalogCars[];
  pagination: PaginationType;
  onFavorite: (id: number) => void;
}) => {
  const { page, totalPages, setPage } = pagination;

  const location = useLocation();
  const isFavoritePage = location.pathname === routes.favorite.path;

  return (
    <CatalogContainer>
      <GridContainer>
        {data?.map((item) => (
          <Fragment key={item.id}>
            <CardItem
              carData={item}
              onFavorite={() => onFavorite(item.id)}
            />
            <MuiDivider sx={{ width: "100%", backgroundColor: "#E3E5ED" }} />
          </Fragment>
        ))}
      </GridContainer>
      {totalPages > 1 && !isFavoritePage && (
        <Pagination
          totalPages={totalPages}
          page={page}
          setPage={setPage}
        />
      )}
    </CatalogContainer>
  );
};

export default Catalog;
