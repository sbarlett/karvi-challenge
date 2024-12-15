import CardItem from "@/components/CardItem";
import { fireEvent, render } from "@testing-library/react";

jest.mock("swiper/react", () => ({
  Swiper: ({ children }) => <div data-testid="swiper-testid">{children}</div>,
  SwiperSlide: ({ children }) => (
    <div data-testid="swiper-slide-testid">{children}</div>
  ),
}));

jest.mock("swiper/modules", () => ({
  Navigation: () => null,
  Pagination: () => null,
  Autoplay: () => null,
}));

const onFavorite = jest.fn();

describe("CardItem", () => {
  it("should render card", () => {
    const { getByText, getByRole, getByTestId } = render(
      <CardItem
        carData={{
          id: 1,
          city: "São Paulo",
          year: 2024,
          brand: "CHEVROLET",
          model: "ONIX",
          version: "1.0 LT MANUAL",
          price: 85000,
          mileage: 5000,
          fav: false,
        }}
        onFavorite={onFavorite}
        viewCard="grid"
      />
    );
    const title = getByText(/Chevrolet Onix/i);
    const version = getByText(/1.0 LT MANUAL/i);
    const mileage = getByText(/5.000 km/i);
    const year = getByText(/2024/i);
    const price = getByText(/R\$ 85.000/i);
    const city = getByText(/São Paulo/i);
    const emptyFav = getByTestId("icon-heart-empty");
    const button = getByRole("button", { name: /Simular parcelas/i });

    fireEvent.click(emptyFav)

    expect(title).toBeInTheDocument();
    expect(version).toBeInTheDocument();
    expect(mileage).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(emptyFav).toBeInTheDocument();
    expect(onFavorite).toHaveBeenCalledTimes(1)
  });

  it("should render favorite icon", async () => {
    const { getByTestId, queryByTestId } = render(
      <CardItem
        carData={{
          id: 1,
          city: "São Paulo",
          year: 2024,
          brand: "CHEVROLET",
          model: "ONIX",
          version: "1.0 LT MANUAL",
          price: 85000,
          mileage: 5000,
          fav: true,
        }}
        onFavorite={onFavorite}
        viewCard="grid"
      />
    );
    const icon = queryByTestId("icon-heart-empty");
    expect(icon).not.toBeInTheDocument();

    const iconLiked = getByTestId("icon-heart-liked");
    expect(iconLiked).toBeInTheDocument();
  });
});
