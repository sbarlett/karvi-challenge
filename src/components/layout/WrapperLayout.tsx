import MenuAside from "@/components/MenuAside";
import TopBarFilter from "@/components/TopBarFilter";
import { Filters } from "@/models";
import { Box, styled } from "@mui/material";
import NavBar from "../NavBar";

const WrapperLayout = ({
  availableFilters,
  totalCars,
  children,
}: {
  totalCars?: number;
  availableFilters: Filters;
  children: React.ReactNode;
}) => {
  return (
    <>
      <NavBar />
      <Main>
        <Container>
          <MenuAside filters={availableFilters} />
          <Wrapper>
            <TopBarFilter totalCars={totalCars} />
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
