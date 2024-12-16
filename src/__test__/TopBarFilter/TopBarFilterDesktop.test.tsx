import TopBarFilterDesktop from "@/components/TopBarFilter/TopBarFilterDesktop";
import { useCatalogContext } from "@/context/CatalogContext";
import { defaultValues } from "@/schema";
import { fireEvent, render } from "@testing-library/react";
import {
    Controller,
    FormProvider,
    useForm,
    useFormContext,
} from "react-hook-form";

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useFormContext: jest.fn(),
  Controller: jest.fn(),
}));

jest.mock("@/context/CatalogContext", () => ({
  useCatalogContext: jest.fn(),
}));

const onClear = jest.fn();
const onDelete = jest.fn();

const WrapperTopBarFilterDesktop = ({
  filtersActive,
  onDeleteFilter,
  onClearFilters,
  totalCars,
}: {
  filtersActive: string[];
  onDeleteFilter: (filter: string) => void;
  onClearFilters: () => void;
  totalCars?: number;
}) => {
  const methods = useForm({
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <TopBarFilterDesktop
        filtersActive={filtersActive}
        onDeleteFilter={onDeleteFilter}
        onClearFilters={onClearFilters}
        totalCars={totalCars}
      />
    </FormProvider>
  );
};

describe("TopBarFilterDesktop", () => {
  const setPage = jest.fn();
  const setValue = jest.fn();
  const control = {};

  beforeEach(() => {
    (useFormContext as jest.Mock).mockReturnValue({ control, setValue });
    (useCatalogContext as jest.Mock).mockReturnValue({ setPage });
    (Controller as jest.Mock).mockImplementation(({ render }) =>
      render({ field: { value: "max", onChange: jest.fn() } })
    );
  });

  it("should render correctly", () => {
    const { getByText, getByRole } = render(
      <WrapperTopBarFilterDesktop
        filtersActive={["Toyota", "Fiat"]}
        onDeleteFilter={onDelete}
        onClearFilters={onClear}
        totalCars={30}
      />
    );
    const buttonClear = getByRole("button", { name: /Limpiar Filtros/i });
    const filterToyota = getByRole("button", { name: /Toyota/i });
    const filterFiat = getByRole("button", { name: /Fiat/i });
    const totalCars = getByText(/30 carros encontrados/i);

    expect(buttonClear).toBeInTheDocument();
    expect(filterToyota).toBeInTheDocument();
    expect(filterFiat).toBeInTheDocument();
    expect(totalCars).toBeInTheDocument();
  });

  it("should handle delete filter click", () => {
    const { getByRole } = render(
      <WrapperTopBarFilterDesktop
        filtersActive={["Fiat"]}
        onDeleteFilter={onDelete}
        onClearFilters={onClear}
        totalCars={30}
      />
    );
    const filterFiat = getByRole("button", { name: /Fiat/i });

    expect(filterFiat).toBeInTheDocument();

    fireEvent.click(filterFiat);

    expect(onDelete).toHaveBeenCalledWith("Fiat");
    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  it("should handle clear filters click", () => {
    const { getByRole } = render(
      <WrapperTopBarFilterDesktop
        filtersActive={["Fiat", "Toyota"]}
        onDeleteFilter={onDelete}
        onClearFilters={onClear}
        totalCars={30}
      />
    );

    const buttonClear = getByRole("button", { name: /Limpiar Filtros/i });
    fireEvent.click(buttonClear);

    expect(onClear).toHaveBeenCalled();
  });

  it("should not render clear filters button when no filters are active", () => {
    const { queryByRole } = render(
      <WrapperTopBarFilterDesktop
        filtersActive={[]}
        onDeleteFilter={onDelete}
        onClearFilters={onClear}
        totalCars={30}
      />
    );

    const buttonClear = queryByRole("button", { name: /Limpiar Filtros/i });
    expect(buttonClear).not.toBeInTheDocument();
  });

  it("should order max price", () => {
    const { getByRole } = render(
      <WrapperTopBarFilterDesktop
        filtersActive={["Fiat", "Toyota"]}
        onDeleteFilter={jest.fn()}
        onClearFilters={jest.fn()}
        totalCars={30}
      />
    );

    const selectPriceMax = getByRole("button", { name: /Mayor Precio/i });
    expect(selectPriceMax).toBeInTheDocument();
  });
});
