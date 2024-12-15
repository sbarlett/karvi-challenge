import MenuAside from "@/components/MenuAside";
import { fireEvent, render } from "@testing-library/react";

const mockFilters = {
  year: [
    {
      id: 2024,
      name: 2024,
    },
    {
      id: 2023,
      name: 2023,
    },
  ],
  city: [
    {
      id: "São Paulo",
      name: "São Paulo",
      slug: "sao-paulo",
    },
    {
      id: "Sorocaba",
      name: "Sorocaba",
      slug: "sorocaba",
    },
  ],
  brand: [
    {
      id: "CHEVROLET",
      name: "CHEVROLET",
    },
    {
      id: "VOLKSWAGEN",
      name: "VOLKSWAGEN",
    },
  ],
  model: [
    {
      id: "POLO",
      name: "POLO",
      brand: "VOLKSWAGEN",
    },
    {
      id: "T-CROSS",
      name: "T-CROSS",
      brand: "VOLKSWAGEN",
    },
  ],
  version: [
    {
      id: "1.0 LT MANUAL",
      name: "1.0 LT MANUAL",
    },
    {
      id: "1.4 TURBO AUTOMATIC",
      name: "1.4 TURBO AUTOMATIC",
    },
  ],
};

jest.mock("react-hook-form", () => ({
  useFormContext: () => ({
    setValue: jest.fn(),
    getValues: jest.fn(),
  }),
}));

describe("MenuAside", () => {
  it("should render the component", () => {
    const { getByText } = render(<MenuAside filters={mockFilters} />);
    const brandSelect = getByText("Marca");
    const modelSelect = getByText("Modelo");
    const yearSelect = getByText("Año");
    const versionSelect = getByText("Versión");
    const citySelect = getByText("Ciudad");
    expect(brandSelect).toBeInTheDocument();
    expect(modelSelect).toBeInTheDocument();
    expect(yearSelect).toBeInTheDocument();
    expect(versionSelect).toBeInTheDocument();
    expect(citySelect).toBeInTheDocument();
  });

    it("should render the brand options", () => {
        const { getByText } = render(<MenuAside filters={mockFilters} />);
        const brandSelect = getByText("Marca");
        expect(brandSelect).toBeInTheDocument();

        fireEvent.click(brandSelect);

        const chevroletOption = getByText(/CHEVROLET/i);;
        const volkswagenOption = getByText(/VOLKSWAGEN/i);
        expect(chevroletOption).toBeInTheDocument();
        expect(volkswagenOption).toBeInTheDocument();
    });

    it("should render the model options", () => {
        const { getByText } = render(<MenuAside filters={mockFilters} />);
        const modelSelect = getByText("Modelo");
        expect(modelSelect).toBeInTheDocument();

        fireEvent.click(modelSelect);

        const poloOption = getByText(/POLO/i);
        const tcrossOption = getByText(/T-CROSS/i);
        expect(poloOption).toBeInTheDocument();
        expect(tcrossOption).toBeInTheDocument();
    });

    it("should render the year options", () => {
        const { getByText } = render(<MenuAside filters={mockFilters} />);
        const yearSelect = getByText("Año");
        expect(yearSelect).toBeInTheDocument();

        fireEvent.click(yearSelect);

        const year2024Option = getByText(/2024/i);
        const year2023Option = getByText(/2023/i);
        expect(year2024Option).toBeInTheDocument();
        expect(year2023Option).toBeInTheDocument();
    });

    it("should render the version options", () => {
        const { getByText } = render(<MenuAside filters={mockFilters} />);
        const versionSelect = getByText("Versión");
        expect(versionSelect).toBeInTheDocument();

        fireEvent.click(versionSelect);

        const version1Option = getByText(/1.0 LT MANUAL/i);
        const version2Option = getByText(/1.4 TURBO AUTOMATIC/i);
        expect(version1Option).toBeInTheDocument();
        expect(version2Option).toBeInTheDocument();
    });

    it("should render the city options", () => {
        const { getByText } = render(<MenuAside filters={mockFilters} />);
        const citySelect = getByText("Ciudad");
        expect(citySelect).toBeInTheDocument();

        fireEvent.click(citySelect);

        const saoPauloOption = getByText(/São Paulo/i);
        const sorocabaOption = getByText(/Sorocaba/i);
        expect(saoPauloOption).toBeInTheDocument();
        expect(sorocabaOption).toBeInTheDocument();
    });

});
