import { routes } from "@/utils/routes";
import { Theme, useMediaQuery } from "@mui/material";
import { useCallback } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useLocation } from "react-router-dom";
import TopBarFilterDesktop from "./TopBarFilterDesktop";
import TopBarFilterMobile from "./TopBarFilterMobile";

const TopBarFilter = ({ totalCars }: { totalCars?: number }) => {
  const { setValue } = useFormContext();

  const filtersActive = useWatch({ name: "filters" });

  const location = useLocation();
  const isFavoritePage = location.pathname === routes.favorite.path;

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const onDeleteFilter = useCallback(
    (filter: string) => {
      const newFilters = filtersActive.filter((f: string) => f !== filter);
      setValue("filters", newFilters);
    },
    [filtersActive, setValue]
  );

  const onClearFilters = useCallback(() => {
    setValue("filters", []);
  }, [setValue]);

  if (!isFavoritePage)
    return (
      <>
        {isMobile ? (
          <TopBarFilterMobile totalCars={totalCars} />
        ) : (
          <TopBarFilterDesktop
            totalCars={totalCars}
            filtersActive={filtersActive}
            onClearFilters={onClearFilters}
            onDeleteFilter={onDeleteFilter}
          />
        )}
      </>
    );
};

export default TopBarFilter;
