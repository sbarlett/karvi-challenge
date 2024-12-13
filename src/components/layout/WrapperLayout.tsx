import Aside from "@/components/Aside";
import FilterState from "@/components/FilterState";
import { Filters } from "@/models";
import { Box, styled } from "@mui/material";
import Link from "@mui/material/Link";

const WrapperLayout = ({
  availableFilters,
  children,
}: {
  availableFilters: Filters;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Box
        sx={{
          padding: "5px 20px",
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Link
          href="/"
          sx={{
            textDecoration: "none",
            color: "#566DED",
            fontSize: "16px",
            fontWeight: "bold",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Home
        </Link>
        <Link
          href="/favorites-cars"
          sx={{
            textDecoration: "none",
            color: "#566DED",
            fontSize: "16px",
            fontWeight: "bold",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Favorites
        </Link>
      </Box>
      <Main>
        <Container>
          <Aside filters={availableFilters} />
          <Wrapper>
            <FilterState />
            {children}
          </Wrapper>
        </Container>
      </Main>
    </>
  );
};

export default WrapperLayout;

const Main = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "60px 42px 30px 37px",
  backgroundColor: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}));

const Container = styled(Box)({
  display: "flex",
  gap: "30px",
  width: "100%",
});

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
});
