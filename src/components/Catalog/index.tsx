import { Fragment } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { selectOptions } from "@/constants";
import { CatalogCars, Pagination } from "@/models";
import { formatNumber } from "@/utils/formatNumber";
import { ExpandMore } from "@mui/icons-material";
import { Box, IconButton, Theme, useMediaQuery } from "@mui/material";
import { IconSwitch, IconViewGrid } from "../assets";
import CardProduct from "../CardProduct";
import PaginationCards from "../PaginationCards";
import {
  ButtonStyles,
  CatalogContainer,
  GridContainer,
  HeaderContainer,
  MenuItemStyles,
  MuiDivider,
  MuiSelect,
  OrderByContainer,
  Paragraph,
  TextButton,
} from "./styles";

const Catalog = ({
  data,
  pagination,
  onFavorite,
  hiddenFavoritePage = true,
}: {
  data: CatalogCars[];
  pagination: Pagination;
  onFavorite: (id: number) => void;
  hiddenFavoritePage?: boolean;
}) => {
  const { page, totalPages, setPage, totalItems } = pagination;

  const { control } = useFormContext();

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <CatalogContainer>
      {hiddenFavoritePage && (
        <HeaderContainer>
          <Paragraph>{formatNumber(totalItems)} carros encontrados</Paragraph>
          <OrderByContainer>
            <Paragraph>Ordenar por</Paragraph>
            {isMobile ? (
              <IconButton>
                <IconViewGrid />
              </IconButton>
            ) : (
              <>
                <Box>
                  <Controller
                    control={control}
                    name="order"
                    render={({ field }) => (
                      <MuiSelect
                        {...field}
                        value={field.value}
                        onChange={(e) => {
                          field.onChange(e);
                        }}
                        IconComponent={ExpandMore}
                        displayEmpty
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              boxShadow: "none",
                              border: "1px solid #E3E5ED",
                              backgroundColor: "#FFFFFF",
                            },
                          },
                        }}
                      >
                        {selectOptions.map((option) => (
                          <MenuItemStyles
                            value={option.value}
                            key={option.value}
                          >
                            <ButtonStyles startIcon={<IconSwitch />}>
                              <TextButton>{option.label}</TextButton>
                            </ButtonStyles>
                          </MenuItemStyles>
                        ))}
                      </MuiSelect>
                    )}
                  />
                </Box>
              </>
            )}
          </OrderByContainer>
        </HeaderContainer>
      )}
      <GridContainer>
        {data?.map((item) => (
          <Fragment key={item.id}>
            <CardProduct
              carData={item}
              onFavorite={() => onFavorite(item.id)}
            />
            <MuiDivider sx={{ width: "100%", backgroundColor: "#E3E5ED" }} />
          </Fragment>
        ))}
      </GridContainer>
      {totalPages > 1 && hiddenFavoritePage && (
        <PaginationCards
          totalPages={totalPages}
          page={page}
          setPage={setPage}
        />
      )}
    </CatalogContainer>
  );
};

export default Catalog;
