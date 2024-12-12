import { useCallback } from "react";
import { Close } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useFormContext, useWatch } from "react-hook-form";

import { capitalizeText } from "@/utils/capitalizeText";
import { IconTrash } from "../assets";

const FilterState = () => {
  const { setValue } = useFormContext();
  const filtersActive = useWatch({ name: "filters" });

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

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          maxWidth: 719,
          flex: 1,
        }}
      >
        {filtersActive.map((filter: string) => (
          <Button
            key={filter}
            onClick={() => onDeleteFilter(filter)}
            endIcon={<Close sx={{ color: "#B4BEF5" }} />}
            sx={{
              border: "1px solid #B4BEF5",
              backgroundColor: "#FFFFFF",
              borderRadius: "64px",
              padding: "3px 8px 3px 12px",
            }}
          >
            <Typography
              sx={{
                color: "#566DED",
                fontSize: 14,
                fontWeight: 500,
                lineHeight: "20px",
                textTransform: "capitalize",
                whiteSpace: "nowrap",
              }}
            >
              {capitalizeText(filter)}
            </Typography>
          </Button>
        ))}
      </Box>
      {filtersActive.length > 0 && (
        <Button
          startIcon={<IconTrash />}
          onClick={onClearFilters}
          sx={{
            backgroundColor: "#FFFFFF",
            padding: "4px 0px",
            "& .MuiButton-startIcon": {
              marginRight: "4px",
            },
            "&:hover": {
              backgroundColor: "#FFFFFF",
            },
          }}
        >
          <Typography
            sx={{
              color: "#566DED",
              fontSize: 14,
              fontWeight: 500,
              lineHeight: "20px",
              textTransform: "capitalize",
              whiteSpace: "nowrap",
            }}
          >
            Limpiar Filtros
          </Typography>
        </Button>
      )}
    </Box>
  );
};

export default FilterState;
